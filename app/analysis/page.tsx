"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateTimeseriesData } from "@/lib/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

export default function AnalysisPage() {
  const yearlyData = generateTimeseriesData(365);
  const volatilityData = yearlyData.map((item) => ({
    ...item,
    volatility: Math.abs(Math.sin(new Date(item.date).getTime()) * 15 + 20),
  }));
  
  const correlationData = [
    { x: 65, y: 75, z: 100, name: 'Stocks' },
    { x: 45, y: 55, z: 80, name: 'Bonds' },
    { x: 35, y: 85, z: 60, name: 'Crypto' },
    { x: 25, y: 35, z: 40, name: 'Cash' },
  ];

  const metrics = [
    {
      name: "Alpha",
      value: 0.82,
      description: "Excess return compared to benchmark",
    },
    {
      name: "Beta",
      value: 1.15,
      description: "Portfolio volatility compared to market",
    },
    {
      name: "Sharpe Ratio",
      value: 1.8,
      description: "Risk-adjusted return measure",
    },
    {
      name: "Max Drawdown",
      value: -15.3,
      description: "Largest peak-to-trough decline",
    },
  ];

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Analysis</h1>
          <p className="mt-2 text-muted-foreground">
            Advanced portfolio analysis and metrics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.name} className="p-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.name}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <Tabs defaultValue="returns">
            <TabsList>
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="volatility">Volatility</TabsTrigger>
              <TabsTrigger value="correlation">Correlation</TabsTrigger>
            </TabsList>
            <TabsContent value="returns" className="space-y-4">
              <h2 className="text-2xl font-semibold">Historical Returns</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      tickFormatter={(value) =>
                        new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          notation: "compact",
                        }).format(value)
                      }
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="volatility" className="space-y-4">
              <h2 className="text-2xl font-semibold">Volatility Analysis</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={volatilityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      label={{ value: 'Volatility (%)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="volatility"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="correlation" className="space-y-4">
              <h2 className="text-2xl font-semibold">Asset Correlation</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="x"
                      name="Risk"
                      label={{ value: 'Risk Score', position: 'bottom' }}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      type="number"
                      dataKey="y"
                      name="Return"
                      label={{ value: 'Return (%)', angle: -90, position: 'insideLeft' }}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <ZAxis type="number" dataKey="z" range={[50, 400]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={correlationData} fill="hsl(var(--primary))" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}