"use client";

import { Card } from "@/components/ui/card";
import { generatePortfolioData } from "@/lib/data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const COLORS = {
  stocks: "hsl(var(--chart-1))",
  bonds: "hsl(var(--chart-2))",
  crypto: "hsl(var(--chart-3))",
  cash: "hsl(var(--chart-4))",
};

export default function AllocationPage() {
  const { assets } = generatePortfolioData();
  const [targetAllocations, setTargetAllocations] = useState({
    stocks: 60,
    bonds: 25,
    crypto: 10,
    cash: 5,
  });
  const [isRebalancing, setIsRebalancing] = useState(false);

  const currentAllocation = assets.reduce((acc, asset) => {
    acc[asset.category] = (acc[asset.category] || 0) + asset.value;
    return acc;
  }, {} as Record<string, number>);

  const totalValue = Object.values(currentAllocation).reduce(
    (sum, value) => sum + value,
    0
  );

  const currentPercentages = Object.entries(currentAllocation).map(
    ([category, value]) => ({
      name: category,
      value: (value / totalValue) * 100,
    })
  );

  const targetPercentages = Object.entries(targetAllocations).map(
    ([category, value]) => ({
      name: category,
      value,
    })
  );

  const handleRebalance = async () => {
    setIsRebalancing(true);
    
    // Validate total allocation equals 100%
    const totalAllocation = Object.values(targetAllocations).reduce((sum, value) => sum + value, 0);
    if (Math.abs(totalAllocation - 100) > 0.01) {
      setIsRebalancing(false);
      return;
    }

    // Calculate required trades
    const trades = Object.entries(targetAllocations).map(([category, targetPercent]) => {
      const currentValue = currentAllocation[category] || 0;
      const targetValue = (totalValue * targetPercent) / 100;
      const difference = targetValue - currentValue;
      return {
        category,
        difference,
      };
    });

    // Simulate rebalancing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsRebalancing(false);
  };

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Portfolio Allocation
          </h1>
          <p className="mt-2 text-muted-foreground">
            Current allocation and rebalancing tools
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Current Allocation</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentPercentages}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {currentPercentages.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.name as keyof typeof COLORS]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Target Allocation</h2>
            <div className="space-y-6">
              {Object.entries(targetAllocations).map(([category, value]) => (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground capitalize">
                      {category}
                    </span>
                    <span className="text-sm font-medium">{value}%</span>
                  </div>
                  <Slider
                    defaultValue={[value]}
                    max={100}
                    step={1}
                    onValueChange={(newValue) =>
                      setTargetAllocations((prev) => ({
                        ...prev,
                        [category]: newValue[0],
                      }))
                    }
                  />
                </div>
              ))}
              <Button 
                className="w-full" 
                onClick={handleRebalance}
                disabled={isRebalancing}
              >
                {isRebalancing ? "Rebalancing..." : "Rebalance Portfolio"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}