/* GG Trading Pricing / Membership Section
   Design: Three-tier pricing — crimson highlight on Pro plan
   Copy: Futures & Options focused features */

import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    tagline: "Get a feel for the edge",
    features: [
      "Public Discord access",
      "Weekly market newsletter",
      "Basic futures education",
      "YouTube video library",
      "Community Q&A",
    ],
    cta: "Get Started Free",
    highlight: false,
    borderClass: "gg-panel",
    ctaStyle: "border-white/20 bg-white/5 hover:bg-white/10 text-white",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    tagline: "For serious futures traders",
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Real-time NQ & ES futures signals",
      "Options flow alerts (0DTE & weeklies)",
      "Commodities signals (CL, GC, SI)",
      "Private Discord signal channels",
      "Live Twitch & YouTube sessions",
      "Pattern & trend analysis reports",
      "Risk & position sizing tools",
    ],
    cta: "Join Pro",
    highlight: true,
    borderClass: "border-[oklch(0.55_0.24_22)/60%]",
    ctaStyle: "bg-[oklch(0.55_0.24_22)] hover:bg-[oklch(0.62_0.24_22)] text-white font-bold cta-pulse",
  },
  {
    name: "Elite",
    price: "$149",
    period: "/month",
    tagline: "Institutional-grade intelligence",
    features: [
      "Everything in Pro",
      "1-on-1 analyst sessions (monthly)",
      "Custom AI portfolio analysis",
      "Pre-market futures briefing (daily)",
      "Priority signal delivery",
      "Exclusive Elite Discord tier",
      "API access for signal data",
      "White-glove onboarding",
    ],
    cta: "Join Elite",
    highlight: false,
    borderClass: "gg-panel-blue",
    ctaStyle: "border-[oklch(0.50_0.22_258)/50%] bg-[oklch(0.50_0.22_258)/10%] hover:bg-[oklch(0.50_0.22_258)/20%] text-[oklch(0.80_0.15_258)]",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative bg-[oklch(0.09_0.03_265)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.24_22)/40%] to-transparent" />
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.65_0.26_22)] mb-3 block">
            Membership
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Choose Your
            <br />
            <span className="gradient-text-crimson-violet">Trading Edge</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[oklch(0.13_0.05_22)] border-2 border-[oklch(0.55_0.24_22)/60%] shadow-[0_0_40px_oklch(0.55_0.24_22/25%)]"
                  : plan.borderClass
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[oklch(0.55_0.24_22)] text-white font-mono tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  {plan.highlight && <Zap size={14} className="text-[oklch(0.65_0.26_22)]" />}
                  <span
                    className="text-sm font-bold tracking-wider uppercase text-white/70"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {plan.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span
                    className="text-4xl font-extrabold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm">{plan.period}</span>
                </div>
                <p className="text-xs text-white/50 mt-1">{plan.tagline}</p>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-[oklch(0.65_0.26_22)]" : "text-[oklch(0.68_0.19_162)]"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold transition-all duration-150 active:scale-[0.97] ${plan.ctaStyle}`}
                variant={plan.highlight ? "default" : "outline"}
                onClick={() =>
                  toast.success(`${plan.name} membership signup coming soon!`)
                }
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.68_0.19_162)/30%] to-transparent" />
    </section>
  );
}
