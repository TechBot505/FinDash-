"use client";

import { Progress } from "@/components/ui/progress";
import { PortfolioSummary } from "@/lib/data";

interface PerformanceMetricsProps {
  data: PortfolioSummary;
}

export function PerformanceMetrics({ data }: PerformanceMetricsProps) {
  const metrics = [
    {
      label: "Return on Investment",
      value: 15.8,
      progress: 78,
    },
    {
      label: "Risk Score",
      value: 6.2,
      progress: 62,
    },
    {
      label: "Sharpe Ratio",
      value: 1.8,
      progress: 85,
    },
  ];

  return (
    <div className="space-y-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">{metric.label}</span>
            <span className="text-sm font-medium">{metric.value}</span>
          </div>
          <Progress value={metric.progress} />
        </div>
      ))}
    </div>
  );
}