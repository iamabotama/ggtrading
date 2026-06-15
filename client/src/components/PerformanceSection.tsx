/* GG Trading Performance Section
   Design: Dark panel with animated green/red bar chart + stats
   Uses recharts for the performance bar chart */

import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", gain: 18.4 },
  { month: "Feb", gain: 27.1 },
  { month: "Mar", gain: -5.2 },
  { month: "Apr", gain: 41.8 },
  { month: "May", gain: 33.5 },
  { month: "Jun", gain: -8.1 },
  { month: "Jul", gain: 52.3 },
  { month: "Aug", gain: 29.7 },
  { month: "Sep", gain: 15.6 },
  { month: "Oct", gain: 44.2 },
  { month: "Nov", gain: 38.9 },
  { month: "Dec", gain: 61.4 },
];

const GREEN = "oklch(0.68 0.19 162)";
const RED = "oklch(0.60 0.22 27)";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    return (
      <div className="gg-panel px-3 py-2 text-xs font-mono">
        <div className="text-white/60 mb-1">{label} 2024</div>
        <div className={val >= 0 ? "text-[oklch(0.68_0.19_162)]" : "text-[oklch(0.60_0.22_27)]"}>
          {val >= 0 ? "+" : ""}{val}%
        </div>
      </div>
    );
  }
  return null;
};

const performanceStats = [
  { label: "Total Annual Return", value: "+349.6%", color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Best Month", value: "+61.4%", color: "text-[oklch(0.68_0.19_162)]" },
  { label: "Worst Month", value: "-8.1%", color: "text-[oklch(0.60_0.22_27)]" },
  { label: "Profitable Months", value: "10/12", color: "text-[oklch(0.62_0.22_292)]" },
  { label: "Sharpe Ratio", value: "3.42", color: "text-[oklch(0.60_0.22_258)]" },
  { label: "Max Drawdown", value: "-12.3%", color: "text-[oklch(0.60_0.22_27)]" },
];

export default function PerformanceSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="performance" className="py-24 relative bg-[oklch(0.09_0.03_265)]">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.48_0.26_292)/40%] to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Chart */}
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[oklch(0.68_0.19_162)] mb-3 block">
              Track Record
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Proven
              <br />
              <span className="gradient-text-green-blue">Green Gains</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Our AI signals delivered consistent monthly gains throughout 2024, with a
              total annual return of <span className="text-[oklch(0.68_0.19_162)] font-semibold">+349.6%</span> for
              active members who followed the system.
            </p>

            {/* Bar Chart */}
            <div className="gg-panel p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Monthly Performance 2024
                </span>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-[oklch(0.68_0.19_162)]" /> Gains
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-[oklch(0.60_0.22_27)]" /> Loss
                  </span>
                </div>
              </div>
              {visible && (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={monthlyData} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 6%)" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "oklch(0.58 0.04 265)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "oklch(0.58 0.04 265)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "oklch(1 0 0 / 4%)" }} />
                    <Bar dataKey="gain" radius={[3, 3, 0, 0]}>
                      {monthlyData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={entry.gain >= 0 ? "#10b981" : "#ef4444"}
                          opacity={0.9}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {performanceStats.map((stat) => (
                <div key={stat.label} className="gg-panel p-5">
                  <div className={`text-3xl font-bold font-mono mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-white/30 leading-relaxed mt-2">
              * Past performance is not indicative of future results. Trading involves
              substantial risk of loss. Results shown are for illustrative purposes only.
            </p>

            {/* CTA */}
            <div className="gg-panel-green p-5 mt-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Ready to capture your green gains?
                  </div>
                  <p className="text-xs text-white/55 mb-3">
                    Join our community and get access to AI signals, live trading sessions, and
                    the full performance dashboard.
                  </p>
                  <button
                    className="text-xs font-semibold text-[oklch(0.68_0.19_162)] hover:text-[oklch(0.78_0.19_162)] transition-colors underline underline-offset-2"
                    onClick={() => {
                      const el = document.getElementById("pricing");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Membership Plans →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.50_0.22_258)/40%] to-transparent" />
    </section>
  );
}
