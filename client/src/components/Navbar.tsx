/* GG Trading Navbar
   Design: Transparent → dark blur on scroll, crimson primary CTA
   Ticker strip: index futures and commodities */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GGLogo from "./GGLogo";
import { toast } from "sonner";

const tickerData = [
  { symbol: "NQ",    price: "21,452.50", change: "+1.36%",  up: true },
  { symbol: "ES",    price: "5,892.75",  change: "+1.22%",  up: true },
  { symbol: "YM",    price: "39,512.00", change: "+0.91%",  up: true },
  { symbol: "RTY",   price: "2,087.45",  change: "+1.08%",  up: true },
  { symbol: "CL",    price: "78.62",     change: "+1.75%",  up: true },
  { symbol: "GC",    price: "2,384.60",  change: "+1.03%",  up: true },
  { symbol: "SI",    price: "28.945",    change: "+1.71%",  up: true },
  { symbol: "NG",    price: "2.341",     change: "-0.85%",  up: false },
  { symbol: "ZW",    price: "548.25",    change: "-1.12%",  up: false },
  { symbol: "BTC",   price: "67,842.21", change: "+8.21%",  up: true },
  { symbol: "ETH",   price: "2,675.76",  change: "+12.58%", up: true },
  { symbol: "VIX",   price: "15.82",     change: "-3.67%",  up: false },
];

const navLinks = [
  { label: "Features",    href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Community",   href: "#community" },
  { label: "Pricing",     href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ── Ticker Strip ── */}
      <div className="w-full overflow-hidden bg-[oklch(0.09_0.04_265)] border-b border-white/5 py-1.5">
        <div className="flex">
          <div className="ticker-track flex gap-8 whitespace-nowrap">
            {[...tickerData, ...tickerData].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-mono">
                <span className="text-white/45">{item.symbol}</span>
                <span className="text-white/80">{item.price}</span>
                <span className={item.up ? "text-[oklch(0.68_0.19_162)]" : "text-[oklch(0.65_0.26_22)]"}>
                  {item.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
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
              className="cta-pulse bg-[oklch(0.55_0.24_22)] hover:bg-[oklch(0.62_0.24_22)] text-white font-semibold px-5 transition-all duration-150 active:scale-[0.97]"
              onClick={() => toast.success("Membership signup coming soon! Stay tuned.")}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Toggle */}
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
              className="mt-2 bg-[oklch(0.55_0.24_22)] hover:bg-[oklch(0.62_0.24_22)] text-white font-semibold"
              onClick={() => { setMobileOpen(false); toast.success("Membership signup coming soon!"); }}
            >
              Join Now
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
