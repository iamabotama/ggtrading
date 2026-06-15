/* GG Trading Navbar
   Design: Transparent → dark blur on scroll, violet primary CTA
   Ticker strip below nav with live simulated prices */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GGLogo from "./GGLogo";
import { toast } from "sonner";

const tickerData = [
  { symbol: "BTC/USD", price: "67,842.21", change: "+8.21%", up: true },
  { symbol: "ETH/USD", price: "2,675.76", change: "+12.58%", up: true },
  { symbol: "SOL/USD", price: "165.35", change: "+9.32%", up: true },
  { symbol: "BNB/USD", price: "595.45", change: "+6.18%", up: true },
  { symbol: "MATIC/USD", price: "0.8457", change: "-2.31%", up: false },
  { symbol: "AVAX/USD", price: "38.92", change: "+4.77%", up: true },
  { symbol: "LINK/USD", price: "18.43", change: "+7.15%", up: true },
  { symbol: "ARB/USD", price: "1.2340", change: "-1.08%", up: false },
  { symbol: "SPY", price: "528.14", change: "+1.34%", up: true },
  { symbol: "QQQ", price: "447.82", change: "+2.11%", up: true },
  { symbol: "NVDA", price: "875.39", change: "+5.62%", up: true },
  { symbol: "TSLA", price: "248.50", change: "-0.87%", up: false },
];

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Ticker Strip */}
      <div className="w-full overflow-hidden bg-[oklch(0.10_0.04_265)] border-b border-white/5 py-1.5">
        <div className="flex">
          <div className="ticker-track flex gap-8 whitespace-nowrap">
            {[...tickerData, ...tickerData].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-mono">
                <span className="text-white/50">{item.symbol}</span>
                <span className="text-white/80">{item.price}</span>
                <span className={item.up ? "text-[oklch(0.68_0.19_162)]" : "text-[oklch(0.60_0.22_27)]"}>
                  {item.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.07_0.03_265)]/95 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/30"
            : "bg-[oklch(0.07_0.03_265)]/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <GGLogo size={38} />
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-bold tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                GG Trading
              </span>
              <span className="text-[10px] tracking-widest text-[oklch(0.68_0.19_162)] uppercase font-mono">
                Green Gains
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/5"
              onClick={() => toast.info("Login coming soon!")}
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="cta-pulse bg-[oklch(0.48_0.26_292)] hover:bg-[oklch(0.55_0.26_292)] text-white font-semibold px-5 transition-all duration-150 active:scale-[0.97]"
              onClick={() => toast.success("Membership signup coming soon! Stay tuned.")}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[oklch(0.10_0.04_265)] border-t border-white/8 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white py-2 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 bg-[oklch(0.48_0.26_292)] hover:bg-[oklch(0.55_0.26_292)] text-white font-semibold"
              onClick={() => {
                setMobileOpen(false);
                toast.success("Membership signup coming soon!");
              }}
            >
              Join Now
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
