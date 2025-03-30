"use client";

import { Card } from "@/components/ui/card";
import { PortfolioSummary } from "@/lib/data";
import { ArrowUpIcon, ArrowDownIcon, DollarSign } from "lucide-react";

interface PortfolioOverviewProps {
  data: PortfolioSummary;
}

export function PortfolioOverview({ data }: PortfolioOverviewProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value / 100);
  };

  return (
    <>
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            <h3 className="text-2xl font-bold">{formatCurrency(data.totalValue)}</h3>
          </div>
          <DollarSign className="h-8 w-8 text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Daily Change</p>
            <h3 className="text-2xl font-bold">{formatCurrency(data.totalChange)}</h3>
          </div>
          {data.totalChange >= 0 ? (
            <ArrowUpIcon className="h-8 w-8 text-green-500" />
          ) : (
            <ArrowDownIcon className="h-8 w-8 text-red-500" />
          )}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Daily Return</p>
            <h3 className="text-2xl font-bold">{formatPercentage(data.totalChangePercent)}</h3>
          </div>
          {data.totalChangePercent >= 0 ? (
            <ArrowUpIcon className="h-8 w-8 text-green-500" />
          ) : (
            <ArrowDownIcon className="h-8 w-8 text-red-500" />
          )}
        </div>
      </Card>
    </>
  );
}