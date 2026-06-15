/* GG Trading — Animated Candlestick Overlay
   Design: Semi-transparent SVG candlestick chart that animates over the hero.
   Opacity ~40%, density ~15 candles, starts with candles already visible.
   Overall trend: rising (green dominant), a few red candles scattered early.
   Runs as a React component using requestAnimationFrame for smooth animation. */

import { useEffect, useRef } from "react";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
  x: number;
  age: number;       // 0–1, how far through its "grow" animation
  born: number;      // timestamp when this candle was created
}

const CANDLE_WIDTH  = 14;
const CANDLE_GAP    = 8;
const CANDLE_STEP   = CANDLE_WIDTH + CANDLE_GAP;
const CHART_HEIGHT  = 220;
const GROW_DURATION = 900; // ms for a candle to fully appear

// Generate a realistic-looking candle relative to the previous close
function generateCandle(prevClose: number, x: number, born: number, forceRed = false): Candle {
  const trend    = 0.55; // bias toward green
  const isGreen  = !forceRed && Math.random() < trend;
  const bodySize = 8 + Math.random() * 28;
  const open     = prevClose;
  const close    = isGreen ? open + bodySize : open - bodySize;
  const wickUp   = Math.random() * 12;
  const wickDown = Math.random() * 12;
  const high     = Math.max(open, close) + wickUp;
  const low      = Math.min(open, close) - wickDown;
  return { open, close, high, low, x, age: 0, born };
}

// Seed initial candles so the chart is never blank
function seedCandles(width: number, now: number): Candle[] {
  const count  = Math.floor(width / CANDLE_STEP) + 2;
  const candles: Candle[] = [];
  let price = 120; // arbitrary starting price in chart-space
  for (let i = 0; i < count; i++) {
    const forceRed = i < 3 || i === 5; // a few early red candles
    const c = generateCandle(price, i * CANDLE_STEP, now - (count - i) * 500, forceRed);
    c.age = 1; // pre-aged so they appear immediately
    price = c.close;
    candles.push(c);
  }
  return candles;
}

export default function CandlestickAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{
    candles: Candle[];
    lastSpawn: number;
    offset: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const now = performance.now();
    stateRef.current = {
      candles: seedCandles(canvas.width, now),
      lastSpawn: now,
      offset: 0,
    };

    let raf: number;

    const draw = (ts: number) => {
      const state = stateRef.current!;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Scroll speed: ~22px/sec
      const dt = Math.min(ts - (state.lastSpawn > 0 ? ts : ts), 16);
      state.offset += 0.022 * 16; // fixed ~22px/s

      // Spawn new candle when rightmost has scrolled into view
      const rightmostX = state.candles[state.candles.length - 1].x - state.offset;
      if (rightmostX < W - CANDLE_STEP) {
        const prevClose = state.candles[state.candles.length - 1].close;
        const newX = state.candles[state.candles.length - 1].x + CANDLE_STEP;
        state.candles.push(generateCandle(prevClose, newX, ts));
        state.lastSpawn = ts;
      }

      // Remove candles that have scrolled off the left
      state.candles = state.candles.filter(c => c.x - state.offset > -CANDLE_STEP * 2);

      // Compute visible price range for scaling
      const visible = state.candles.filter(c => {
        const sx = c.x - state.offset;
        return sx > -CANDLE_STEP && sx < W + CANDLE_STEP;
      });
      if (visible.length === 0) { raf = requestAnimationFrame(draw); return; }

      const minPrice = Math.min(...visible.map(c => c.low))  - 10;
      const maxPrice = Math.max(...visible.map(c => c.high)) + 10;
      const priceRange = maxPrice - minPrice || 1;

      const toY = (p: number) => H - ((p - minPrice) / priceRange) * H * 0.85 - H * 0.05;

      // Draw candles
      for (const c of visible) {
        const sx = c.x - state.offset;
        // Update age
        if (c.age < 1) {
          c.age = Math.min(1, (ts - c.born) / GROW_DURATION);
        }
        const eased = 1 - Math.pow(1 - c.age, 3); // ease-out cubic

        const isGreen = c.close >= c.open;
        const color   = isGreen
          ? `rgba(0, 232, 122, ${0.40 * eased})`   // emerald green
          : `rgba(204, 26,  26,  ${0.40 * eased})`; // crimson red (accent)
        const glowColor = isGreen
          ? `rgba(0, 232, 122, ${0.15 * eased})`
          : `rgba(204, 26,  26,  ${0.12 * eased})`;

        const bodyTop    = toY(Math.max(c.open, c.close));
        const bodyBottom = toY(Math.min(c.open, c.close));
        const bodyH      = Math.max(2, (bodyBottom - bodyTop) * eased);
        const wickTop    = toY(c.high);
        const wickBottom = toY(c.low);

        // Glow shadow
        ctx.shadowColor = glowColor;
        ctx.shadowBlur  = 8;

        // Wick
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth   = 1.5;
        ctx.moveTo(sx + CANDLE_WIDTH / 2, wickTop  + (wickTop  - bodyTop)    * (1 - eased));
        ctx.lineTo(sx + CANDLE_WIDTH / 2, wickBottom - (wickBottom - bodyBottom) * (1 - eased));
        ctx.stroke();

        // Body
        ctx.fillStyle = color;
        ctx.fillRect(sx, bodyTop, CANDLE_WIDTH, bodyH);

        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  );
}
