/* GG Trading Leadership Section
   Design: Dark panel, founder card with crimson accent
   Brandon Iwata — Owner & CEO */

export default function LeadershipSection() {
  return (
    <section className="py-20 relative bg-[oklch(0.09_0.03_265)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.24_22)/30%] to-transparent" />
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: Text */}
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.65_0.26_22)] mb-3 block">
              Leadership
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built by a Trader,
              <br />
              <span className="gradient-text-crimson-violet">For Traders.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              GG Trading was founded on a conviction that serious futures and options traders
              deserve institutional-grade AI intelligence — without the institutional price tag.
              Every signal, every session, every tool is built with that mission at its core.
            </p>
          </div>

          {/* Right: Founder Card */}
          <div className="flex-shrink-0">
            <div className="gg-panel-crimson p-8 max-w-sm w-full relative overflow-hidden">
              {/* Decorative glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
                style={{ background: "oklch(0.55 0.24 22 / 15%)" }}
              />

              {/* Avatar */}
              <div className="relative z-10 flex items-center gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-extrabold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.55 0.24 22), oklch(0.48 0.26 292), oklch(0.68 0.19 162))",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  BI
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Brandon Iwata
                  </h3>
                  <p className="text-sm font-mono text-[oklch(0.65_0.26_22)] mt-0.5">
                    Owner &amp; CEO
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">GG Trading</p>
                </div>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              <blockquote className="relative z-10">
                <p className="text-sm text-white/70 leading-relaxed italic">
                  "The Nasdaq and S&P 500 futures markets are the most liquid arenas on earth.
                  With the right AI-driven patterns and disciplined risk management, green gains
                  aren't luck — they're a repeatable system."
                </p>
                <footer className="mt-3 text-xs text-white/35 font-mono">
                  — Brandon Iwata, Founder &amp; CEO
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.50_0.22_258)/30%] to-transparent" />
    </section>
  );
}
