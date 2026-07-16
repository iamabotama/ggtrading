/* GG Trading — Streams Page
   Design: Dark violet/blue/green theme, featured video hero, session grid below
   Videos: Brandon's real YouTube trading sessions
   Layout: Featured player top, 3-col grid below, subscribe CTA at bottom */

import { useState } from "react";
import { Play, Youtube, Radio, ExternalLink, TrendingUp } from "lucide-react";

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  duration?: string;
}

const videos: Video[] = [
  {
    id: "1",
    youtubeId: "dsCpCUYdAaI",
    title: "NQ Futures — Fair Value Gap Setup & EMA Crossover Entry",
    description:
      "Brandon walks through a live MNQ trade using the 5-minute FVG setup and EMA crossover confirmation. Watch the full entry, management, and exit at 2:1 risk/reward.",
    tag: "Live Trade",
    tagColor: "oklch(0.68_0.19_162)",
    duration: "Live Session",
  },
  {
    id: "2",
    youtubeId: "dsCpCUYdAaI",
    title: "Opening Range Breakout — 6:30 AM Strategy Breakdown",
    description:
      "Full breakdown of the 6:30 AM Opening Range Breakout on ES Futures. Learn how to identify the range, set your levels, and execute with precision using micro contracts.",
    tag: "Education",
    tagColor: "oklch(0.65_0.22_265)",
    duration: "Training",
  },
  {
    id: "3",
    youtubeId: "55ocewJzZ20",
    title: "S&P 500 Futures — Reading the Red Ribbon Bands",
    description:
      "Deep dive into Brandon's signature red ribbon band indicator system. Learn how these dynamic support/resistance zones guide every entry and exit on MES and ES.",
    tag: "Strategy",
    tagColor: "oklch(0.55_0.22_265)",
    duration: "Analysis",
  },
  {
    id: "4",
    youtubeId: "VF6ELmm8534",
    title: "Micro Futures for Beginners — Getting Started with MNQ & MES",
    description:
      "New to futures? Brandon covers everything you need to start trading Micro Nasdaq and Micro S&P 500 contracts — account setup, TradingView configuration, and your first trade.",
    tag: "Beginner",
    tagColor: "oklch(0.60_0.18_45)",
    duration: "Getting Started",
  },
];

export default function Streams() {
  const [featured, setFeatured] = useState<Video>(videos[0]);

  return (
    <div className="min-h-screen bg-[oklch(0.07_0.025_265)]">

      {/* Page Header */}
      <div
        className="relative border-b border-white/8 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10_0.04_280) 0%, oklch(0.07_0.025_265) 60%, oklch(0.08_0.03_200) 100%)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.68_0.19_162)/20% 1px, transparent 1px), linear-gradient(90deg, oklch(0.68_0.19_162)/20% 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-red-400 tracking-widest uppercase">Live & Replay</span>
            </div>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Trading{" "}
            <span
              style={{
                background: "linear-gradient(90deg, oklch(0.68_0.19_162), oklch(0.65_0.22_265))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sessions
            </span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-xl leading-relaxed">
            Watch Brandon trade live — NQ &amp; ES Futures, real setups, real entries, real results.
            Every session is a masterclass in FVG, EMA crossovers, and Opening Range Breakout strategy.
          </p>
        </div>
      </div>

      <div className="container py-8 sm:py-12">

        {/* Featured Player */}
        <div className="mb-10 sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

            {/* Video embed */}
            <div className="lg:col-span-3">
              <div
                className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  key={featured.youtubeId + featured.id}
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?rel=0&modestbranding=1`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Featured info */}
            <div className="lg:col-span-2 flex flex-col justify-start">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 w-fit"
                style={{
                  background: `${featured.tagColor}22`,
                  border: `1px solid ${featured.tagColor}44`,
                  color: featured.tagColor,
                }}
              >
                <TrendingUp size={11} />
                {featured.tag}
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {featured.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-bold text-sm transition-all duration-150 active:scale-[0.97]"
                  style={{ background: "oklch(0.48_0.26_292)" }}
                >
                  <Youtube size={15} />
                  Watch on YouTube
                </a>
                <a
                  href="https://www.youtube.com/@GGTrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 font-semibold text-sm transition-all duration-150 active:scale-[0.97]"
                >
                  <ExternalLink size={14} />
                  Subscribe
                </a>
              </div>

              {/* Session list for quick switching */}
              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="text-xs text-white/30 uppercase tracking-widest font-mono mb-3">All Sessions</p>
                <div className="flex flex-col gap-2">
                  {videos.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setFeatured(v)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 border ${
                        featured.id === v.id
                          ? "bg-white/8 border-white/15"
                          : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/8"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${v.tagColor}22` }}
                      >
                        <Play size={12} style={{ color: v.tagColor }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white/80 truncate leading-snug">
                          {v.title}
                        </p>
                        <p className="text-[10px] text-white/35 font-mono mt-0.5">{v.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session Grid */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <h2
              className="text-lg sm:text-xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              All Sessions
            </h2>
            <a
              href="https://www.youtube.com/@GGTrading"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[oklch(0.68_0.19_162)] transition-colors"
            >
              <Youtube size={13} />
              View Full Channel
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setFeatured(v);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`group text-left rounded-xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${
                  featured.id === v.id
                    ? "border-white/20 bg-white/6"
                    : "border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                      style={{ background: "oklch(0.48_0.26_292)" }}
                    >
                      <Play size={14} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: `${v.tagColor}cc`,
                      color: "white",
                    }}
                  >
                    {v.tag}
                  </div>
                </div>
                {/* Card info */}
                <div className="p-3 sm:p-4">
                  <p
                    className="text-sm font-semibold text-white/85 leading-snug mb-1.5 line-clamp-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {v.title}
                  </p>
                  <p className="text-xs text-white/35 line-clamp-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div
          className="rounded-2xl border border-white/10 p-8 sm:p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12_0.05_280) 0%, oklch(0.09_0.03_265) 50%, oklch(0.11_0.04_200) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, oklch(0.68_0.19_162) 0%, transparent 60%), radial-gradient(circle at 70% 50%, oklch(0.65_0.22_265) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Radio size={18} className="text-red-400 animate-pulse" />
              <span className="text-sm font-mono font-bold text-red-400 tracking-widest uppercase">Live Sessions Weekly</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-black text-white mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Never Miss a{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, oklch(0.68_0.19_162), oklch(0.65_0.22_265))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Green Session
              </span>
            </h3>
            <p className="text-white/45 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
              Brandon streams live NQ &amp; ES Futures trades weekly on YouTube and Kick.
              Subscribe to get notified the moment a session goes live.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.youtube.com/@GGTrading"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm transition-all duration-150 active:scale-[0.97] w-full sm:w-auto justify-center"
                style={{ background: "#FF0000" }}
              >
                <Youtube size={16} />
                Subscribe on YouTube
              </a>
              <a
                href="https://kick.com/GGTradingLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-black font-bold text-sm transition-all duration-150 active:scale-[0.97] w-full sm:w-auto justify-center"
                style={{ background: "#53FC18" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M2 2h4v5.333L9.333 4H14L9.333 9.333 14 14H9.333L6 10.667V14H2V2zm10 0h4v4h2V2h4v12h-4v-4h-2v4h-4V2z" />
                </svg>
                Follow on Kick
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
