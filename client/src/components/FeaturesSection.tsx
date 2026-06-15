/* GG Trading Features Section
   Design: Asymmetric card grid, violet/blue/green panel borders
   Showcases AI signals, DEX trading, community, and risk management */

import { Brain, BarChart3, Zap, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Brain size={28} />,
    title: "AI Market Intelligence",
    description:
      "Our proprietary AI models analyze thousands of on-chain and off-chain signals simultaneously, surfacing high-probability setups before the crowd sees them.",
    accent: "violet",
    borderClass: "gg-panel",
    iconColor: "text-[oklch(0.62_0.22_292)]",
    glowColor: "oklch(0.48 0.26 292 / 20%)",
  },
  {
    icon: <Zap size={28} />,
    title: "Real-Time DEX Signals",
    description:
      "Live alerts on DEX liquidity shifts, whale movements, and arbitrage windows across Ethereum, Solana, and Arbitrum — delivered in milliseconds.",
    accent: "blue",
    borderClass: "gg-panel-blue",
    iconColor: "text-[oklch(0.60_0.22_258)]",
    glowColor: "oklch(0.50 0.22 258 / 20%)",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Advanced Chart Analysis",
    description:
      "AI-annotated charts with automatic support/resistance detection, pattern recognition, and volume profile analysis — all in one clean interface.",
    accent: "green",
    borderClass: "gg-panel-green",
    iconColor: "text-[oklch(0.68_0.19_162)]",
    glowColor: "oklch(0.68 0.19 162 / 20%)",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Portfolio Performance Tracking",
    description:
      "Track your green gains with precision. Real-time P&L, drawdown analysis, and performance benchmarking against market indices.",
    accent: "green",
    borderClass: "gg-panel-green",
    iconColor: "text-[oklch(0.68_0.19_162)]",
    glowColor: "oklch(0.68 0.19 162 / 20%)",
  },
  {
    icon: <Users size={28} />,
    title: "Elite Trading Community",
    description:
      "Join 12,400+ serious traders on Discord, YouTube live streams, and Twitch sessions. Discuss setups, share wins, and learn from the best.",
    accent: "violet",
    borderClass: "gg-panel",
    iconColor: "text-[oklch(0.62_0.22_292)]",
    glowColor: "oklch(0.48 0.26 292 / 20%)",
  },
  {
    icon: <Shield size={28} />,
    title: "Risk Management Engine",
    description:
      "Automated position sizing, stop-loss recommendations, and portfolio correlation analysis to protect your capital while maximizing upside.",
    accent: "blue",
    borderClass: "gg-panel-blue",
    iconColor: "text-[oklch(0.60_0.22_258)]",
    glowColor: "oklch(0.50 0.22 258 / 20%)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background neural grid */}
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.62_0.22_292)] mb-3 block">
            Platform Features
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Edge in
            <br />
            <span className="gradient-text-violet-blue">Every Market</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            GG Trading combines institutional-grade AI with a professional community to give
            you the tools serious traders rely on.
          </p>
        </div>

        {/* Feature Grid — asymmetric: first row 3 cols, second row 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${feature.borderClass} p-6 group hover:scale-[1.02] transition-all duration-300 cursor-default`}
              style={{
                boxShadow: `0 0 0 0 ${feature.glowColor}`,
                transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${feature.glowColor}, 0 0 60px ${feature.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${feature.glowColor}`;
              }}
            >
              <div className={`${feature.iconColor} mb-4 opacity-90 group-hover:opacity-100 transition-opacity`}>
                {feature.icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
