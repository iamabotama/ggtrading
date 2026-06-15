/* GG Trading Hero Section
   Design: Full-bleed hero with generated DEX trading background
   Left: headline + CTA | Right: live mini trading panel
   Full image vibrancy — no opacity reduction on background */

import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield } from "lucide-react";
import { toast } from "sonner";

const HERO_IMAGE = "/manus-storage/gg_trading_hero_baed68c8.png";

const stats = [
  { label: "Active Members", value: "12,400+", color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Avg. Monthly Gains", value: "+34.7%", color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Win Rate", value: "78.3%", color: "text-[oklch(0.62_0.22_292)]" },
  { label: "Assets Tracked", value: "500+", color: "text-[oklch(0.60_0.22_258)]" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image — full vibrancy, no opacity reduction */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Subtle left-side gradient to ensure text readability without killing image vibrancy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.07 0.03 265 / 88%) 0%, oklch(0.07 0.03 265 / 60%) 45%, oklch(0.07 0.03 265 / 10%) 100%)",
        }}
      />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.07 0.03 265))",
        }}
      />

      {/* Neural grid overlay */}
      <div className="absolute inset-0 neural-grid opacity-20" />

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="fade-up fade-up-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.68_0.19_162)/40%] bg-[oklch(0.68_0.19_162)/10%] mb-6">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.68_0.19_162)] animate-pulse" />
            <span className="text-xs font-mono text-[oklch(0.68_0.19_162)] tracking-wider uppercase">
              AI-Powered Trading Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="fade-up fade-up-delay-2 text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Green Gains.
            <br />
            <span className="gradient-text-violet-blue">Every Session.</span>
          </h1>

          {/* Sub-headline */}
          <p className="fade-up fade-up-delay-3 text-lg lg:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            GG Trading delivers AI-driven market intelligence, real-time DEX signals, and a
            professional community — built for traders who demand an edge.
          </p>

          {/* Feature pills */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-3 mb-10">
            {[
              { icon: <Zap size={14} />, label: "Real-Time Signals" },
              { icon: <TrendingUp size={14} />, label: "AI Chart Analysis" },
              { icon: <Shield size={14} />, label: "Risk Management" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/80 font-medium"
              >
                <span className="text-[oklch(0.62_0.22_292)]">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-delay-5 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="cta-pulse bg-[oklch(0.48_0.26_292)] hover:bg-[oklch(0.55_0.26_292)] text-white font-bold text-base px-8 py-6 rounded-lg transition-all duration-150 active:scale-[0.97]"
              onClick={() => toast.success("Membership signup coming soon! We'll notify you at launch.")}
            >
              Join the Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-8 py-6 rounded-lg transition-all duration-150 active:scale-[0.97]"
              onClick={() => toast.info("Live demo coming soon!")}
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-white/50 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
