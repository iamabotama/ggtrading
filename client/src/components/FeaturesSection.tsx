/* GG Trading Features Section
   Design: Violet primary, blue balance, green indicators
   Red used ONLY where semantically appropriate (risk/loss)
   Copy: Futures & Options on Nasdaq, S&P 500, Commodities
   Mobile: single column, responsive grid */

import { Brain, BarChart3, Zap, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Brain size={26} />,
    title: "AI Pattern Recognition",
    description:
      "Proprietary models scan NQ and ES futures in real time, identifying high-probability trend setups, breakout patterns, and mean-reversion signals before the move begins.",
    panelClass: "gg-panel",
    iconColor: "text-[oklch(0.62_0.22_292)]",
    glowColor: "oklch(0.48 0.26 292 / 20%)",
  },
  {
    icon: <Zap size={26} />,
    title: "Futures Signal Alerts",
    description:
      "Instant alerts on Nasdaq (NQ), S&P 500 (ES), Crude Oil (CL), Gold (GC), and Silver (SI) futures — entry, target, and stop levels delivered the moment conditions align.",
    panelClass: "gg-panel-blue",
    iconColor: "text-[oklch(0.65_0.18_258)]",
    glowColor: "oklch(0.50 0.22 258 / 20%)",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Options Flow Intelligence",
    description:
      "AI-curated options flow analysis on major indexes — unusual activity, large block trades, and high-conviction directional bets surfaced in a clean, actionable dashboard.",
    panelClass: "gg-panel-green",
    iconColor: "text-[oklch(0.68_0.19_162)]",
    glowColor: "oklch(0.68 0.19 162 / 20%)",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Index Trend & Pattern Analysis",
    description:
      "Systematic identification of proven chart patterns — bull flags, wedges, VWAP reclaims, and key level breakouts — applied exclusively to large-cap index futures for maximum liquidity.",
    panelClass: "gg-panel",
    iconColor: "text-[oklch(0.62_0.22_292)]",
    glowColor: "oklch(0.48 0.26 292 / 20%)",
  },
  {
    icon: <Users size={26} />,
    title: "Elite Trading Community",
    description:
      "Join 12,400+ serious futures and options traders on Discord, YouTube live streams, and Twitch sessions. Real-time trade commentary, setups shared, and wins celebrated together.",
    panelClass: "gg-panel-blue",
    iconColor: "text-[oklch(0.65_0.18_258)]",
    glowColor: "oklch(0.50 0.22 258 / 20%)",
  },
  {
    icon: <Shield size={26} />,
    title: "Risk & Position Management",
    description:
      "Automated position sizing for futures contracts, max-loss guardrails, and portfolio heat monitoring — protecting your capital while keeping you positioned for the next green session.",
    panelClass: "gg-panel-green",
    iconColor: "text-[oklch(0.68_0.19_162)]",
    glowColor: "oklch(0.68 0.19 162 / 20%)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        <div className="mb-10 sm:mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.62_0.22_292)] mb-3 block">
            Platform Features
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Edge in
            <br />
            <span className="gradient-text-violet-green">Every Market</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Built for traders who specialize in index futures and options — where liquidity is
            deep, patterns are reliable, and AI-driven precision pays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${feature.panelClass} p-5 sm:p-6 group transition-all duration-300 cursor-default`}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.01)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${feature.glowColor}, 0 8px 30px oklch(0 0 0 / 30%)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <div className={`${feature.iconColor} mb-3 sm:mb-4 opacity-90 group-hover:opacity-100 transition-opacity`}>
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/55 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
