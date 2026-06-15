/* GG Trading Hero Section
   Design: Full-vibrancy hero — NO dark overlay on image.
   Text lives inside a frosted glass panel (backdrop-blur) so the image
   remains completely unobscured and maximally vibrant.
   Copy: Futures & Options on Nasdaq, S&P 500, and Commodities */

import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, BarChart2 } from "lucide-react";
import { toast } from "sonner";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663273809872/A28evjrqCmFMdqNrmCPLoV/gg_trading_hero_v2-R2PzUn9ywcDX76x9bhPAnd.webp";

const stats = [
  { label: "Win Rate", value: "78.3%",   color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Avg. Monthly Gain", value: "+34.7%", color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Active Members", value: "12,400+", color: "text-[oklch(0.62_0.22_292)]" },
  { label: "Instruments Tracked", value: "NQ · ES · CL · GC", color: "text-[oklch(0.78_0.17_80)]" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Background image — FULL vibrancy, zero overlay ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Only a very thin bottom fade to blend into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.07 0.03 265))" }}
      />

      {/* ── Content ── */}
      <div className="container relative z-10 py-20 lg:py-28">
        {/* Frosted glass panel — left-aligned, max 560px wide */}
        <div className="hero-glass max-w-[560px] p-8 lg:p-10">

          {/* Badge */}
          <div className="fade-up fade-up-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.55_0.24_22)/50%] bg-[oklch(0.55_0.24_22)/15%] mb-5">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.26_22)] animate-pulse" />
            <span className="text-xs font-mono text-[oklch(0.80_0.18_22)] tracking-wider uppercase">
              AI-Powered Futures &amp; Options Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up fade-up-delay-2 text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Green Gains.
            <br />
            <span className="gradient-text-crimson-violet">Every Session.</span>
          </h1>

          {/* Sub-headline */}
          <p className="fade-up fade-up-delay-3 text-base lg:text-lg text-white/80 leading-relaxed mb-6">
            GG Trading specializes in <strong className="text-white">Futures &amp; Options</strong> on
            the <strong className="text-[oklch(0.78_0.17_80)]">Nasdaq (NQ)</strong>,{" "}
            <strong className="text-[oklch(0.78_0.17_80)]">S&amp;P 500 (ES)</strong>, and major
            commodities — exploiting high-probability trends and patterns with a proven AI-driven edge.
          </p>

          {/* Feature pills */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-2.5 mb-7">
            {[
              { icon: <Zap size={13} />, label: "NQ & ES Futures Signals" },
              { icon: <TrendingUp size={13} />, label: "Options Flow Analysis" },
              { icon: <BarChart2 size={13} />, label: "Commodities Trading" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/8 border border-white/12 text-sm text-white/85 font-medium"
              >
                <span className="text-[oklch(0.65_0.26_22)]">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-delay-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="cta-pulse bg-[oklch(0.55_0.24_22)] hover:bg-[oklch(0.62_0.24_22)] text-white font-bold text-base px-7 py-5 rounded-lg transition-all duration-150 active:scale-[0.97]"
              onClick={() =>
                toast.success("Membership signup coming soon! We'll notify you at launch.")
              }
            >
              Join the Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/8 hover:bg-white/14 text-white font-semibold text-base px-7 py-5 rounded-lg transition-all duration-150 active:scale-[0.97]"
              onClick={() => toast.info("Live demo coming soon!")}
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </div>

      {/* ── Stats bar — sits above the bottom fade ── */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container">
          <div className="flex flex-wrap gap-x-8 gap-y-3 max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-white/45 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
