/* GG Trading Community Section
   Design: Social platform cards with Discord, X (Twitter), YouTube, Twitch
   Dark panels with platform accent colors */

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MessageCircle, Youtube, Tv, Users } from "lucide-react";

// X (Twitter) icon as SVG
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Discord icon as SVG
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Twitch icon as SVG
const TwitchIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
  </svg>
);

const platforms = [
  {
    name: "Discord",
    description: "Join our private Discord server for real-time trade alerts, AI signal channels, and direct access to our analyst team. 24/7 active community.",
    icon: <DiscordIcon />,
    color: "#5865F2",
    bgClass: "bg-[#5865F2]/10",
    borderColor: "border-[#5865F2]/30",
    hoverGlow: "hover:shadow-[0_0_30px_#5865F2_30%]",
    members: "8,200+ members",
    cta: "Join Discord",
    href: "#",
  },
  {
    name: "X (Twitter)",
    description: "Follow @GGTrading for daily market insights, AI-generated chart breakdowns, and real-time commentary on breaking market events.",
    icon: <XIcon />,
    color: "#ffffff",
    bgClass: "bg-white/5",
    borderColor: "border-white/15",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    members: "Follow for updates",
    cta: "Follow on X",
    href: "#",
  },
  {
    name: "YouTube",
    description: "Weekly deep-dive analysis videos, AI trading tutorials, and recorded live sessions. Subscribe for full access to our educational library.",
    icon: <Youtube size={28} />,
    color: "#FF0000",
    bgClass: "bg-[#FF0000]/10",
    borderColor: "border-[#FF0000]/30",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
    members: "Subscribe for free",
    cta: "Watch on YouTube",
    href: "#",
  },
  {
    name: "Twitch",
    description: "Live trading sessions, real-time AI signal breakdowns, and interactive Q&A with our analysts. Stream every market day.",
    icon: <TwitchIcon />,
    color: "#9146FF",
    bgClass: "bg-[#9146FF]/10",
    borderColor: "border-[#9146FF]/30",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(145,70,255,0.2)]",
    members: "Live every market day",
    cta: "Watch on Twitch",
    href: "#",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 relative">
      <div className="absolute inset-0 neural-grid opacity-10" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.62_0.22_292)] mb-3 block">
              Community
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Trade Together.
              <br />
              <span className="gradient-text-violet-blue">Win Together.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              GG Trading is more than signals — it's a professional community of serious traders
              across every major platform.
            </p>
          </div>

          <div className="flex items-center gap-3 gg-panel px-5 py-4 self-start lg:self-auto">
            <Users size={20} className="text-[oklch(0.62_0.22_292)]" />
            <div>
              <div className="text-xl font-bold font-mono text-white">12,400+</div>
              <div className="text-xs text-white/50">Active Members</div>
            </div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`relative p-6 rounded-xl border transition-all duration-300 group cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, oklch(0.12 0.04 265), oklch(0.10 0.04 265))`,
                borderColor: `${platform.color}30`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${platform.color}25`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ color: platform.color, background: `${platform.color}15` }}
                >
                  {platform.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {platform.name}
                    </h3>
                    <span className="text-xs font-mono text-white/40">{platform.members}</span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed mb-4">
                    {platform.description}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all duration-150 active:scale-[0.97]"
                    style={{ borderColor: `${platform.color}40` }}
                    onClick={() => toast.info(`${platform.name} link coming soon!`)}
                  >
                    {platform.cta} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
