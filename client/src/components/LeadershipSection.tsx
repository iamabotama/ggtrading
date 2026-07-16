/* GG Trading Leadership Section
   Design: Dark panel, founder card with violet accent (gg-panel)
   Brandon Iwata — Owner & CEO
   Mobile: fully stacked, centered text, full-width card */

export default function LeadershipSection() {
  return (
    <section className="py-16 sm:py-20 relative bg-[oklch(0.09_0.03_265)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.48_0.26_292)/30%] to-transparent" />
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

          {/* Left: Text */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.62_0.22_292)] mb-3 block">
              Leadership
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built by a Trader,
              <br />
              <span className="gradient-text-violet-green">For Traders.</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4">
              GG Trading was founded on a simple conviction: the same setups that institutions
              use — Fair Value Gaps, Opening Range Breakouts, EMA structure — are available to
              every trader willing to learn them correctly.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Brandon built this community to teach the exact system he trades live every morning:
              MNQ and MES micro futures, TradingView chart mastery, and a strict 2:1 risk/reward
              discipline that protects capital while compounding gains session after session.
            </p>
          </div>

          {/* Right: Founder Card */}
          <div className="w-full lg:flex-shrink-0 lg:w-auto">
            <div className="gg-panel p-6 sm:p-8 w-full lg:max-w-sm relative overflow-hidden">
              {/* Decorative glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
                style={{ background: "oklch(0.48 0.26 292 / 20%)" }}
              />

              {/* Avatar + Name */}
              <div className="relative z-10 flex items-center gap-4 sm:gap-5 mb-6">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-extrabold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.48 0.26 292), oklch(0.50 0.22 258), oklch(0.68 0.19 162))",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  BI
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Brandon Iwata
                  </h3>
                  <p className="text-sm font-mono text-[oklch(0.62_0.22_292)] mt-0.5">
                    Owner &amp; CEO
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">GG Trading · Growth in Gains</p>
                </div>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              <blockquote className="relative z-10">
                <p className="text-sm text-white/70 leading-relaxed italic">
                  "I trade MNQ and MES every morning using Fair Value Gaps and the 6:30 AM
                  Opening Range Breakout. Start with micro contracts, keep your risk/reward at
                  2:1 minimum, and let the setups come to you. Green gains aren't luck —
                  they're a repeatable system you can learn."
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
