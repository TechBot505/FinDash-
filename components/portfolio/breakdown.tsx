"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { PortfolioSummary } from "@/lib/data";

interface PortfolioBreakdownProps {
  data: PortfolioSummary;
}

const COLORS = {
  stocks: "hsl(var(--chart-1))",
  bonds: "hsl(var(--chart-2))",
  crypto: "hsl(var(--chart-3))",
  cash: "hsl(var(--chart-4))",
};

export function PortfolioBreakdown({ data }: PortfolioBreakdownProps) {
  const chartData = data.assets.map((asset) => ({
    name: asset.category,
    value: asset.value,
  }));

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name as keyof typeof COLORS]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}