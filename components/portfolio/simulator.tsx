"use client";

import { Slider } from "@/components/ui/slider";
import { PortfolioSummary } from "@/lib/data";
import { useState } from "react";

interface ScenarioSimulatorProps {
  data: PortfolioSummary;
}

export function ScenarioSimulator({ data }: ScenarioSimulatorProps) {
  const [allocations, setAllocations] = useState({
    stocks: 50,
    bonds: 25,
    crypto: 15,
    cash: 10,
  });

  const handleAllocationChange = (category: keyof typeof allocations, value: number[]) => {
    setAllocations((prev) => ({
      ...prev,
      [category]: value[0],
    }));
  };

  return (
    <div className="space-y-6">
      {Object.entries(allocations).map(([category, value]) => (
        <div key={category} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground capitalize">{category}</span>
            <span className="text-sm font-medium">{value}%</span>
          </div>
          <Slider
            defaultValue={[value]}
            max={100}
            step={1}
            onValueChange={(value) => handleAllocationChange(category as keyof typeof allocations, value)}
          />
        </div>
      ))}
    </div>
  );
}