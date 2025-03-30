"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generatePortfolioData, generateTimeseriesData } from "@/lib/data";
import { PortfolioOverview } from "@/components/portfolio/overview";
import { PortfolioChart } from "@/components/portfolio/chart";
import { PortfolioBreakdown } from "@/components/portfolio/breakdown";
import { PerformanceMetrics } from "@/components/portfolio/performance";
import { ScenarioSimulator } from "@/components/portfolio/simulator";

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "3M" | "1Y" | "5Y">("1M");
  const portfolioData = generatePortfolioData();
  const timeseriesData = generateTimeseriesData(30); // 30 days of data

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight">Financial Dashboard</h1>
          <Tabs value={timeframe} onValueChange={(v) => setTimeframe(v as any)}>
            <TabsList>
              <TabsTrigger value="1D">1D</TabsTrigger>
              <TabsTrigger value="1W">1W</TabsTrigger>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="3M">3M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
              <TabsTrigger value="5Y">5Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioOverview data={portfolioData} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Portfolio Value</h2>
            <PortfolioChart data={timeseriesData} />
          </Card>
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Asset Allocation</h2>
            <PortfolioBreakdown data={portfolioData} />
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Performance Metrics</h2>
            <PerformanceMetrics data={portfolioData} />
          </Card>
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Scenario Simulator</h2>
            <ScenarioSimulator data={portfolioData} />
          </Card>
        </div>
      </div>
    </div>
  );
}