// Mock data utilities and types
export interface Asset {
  id: string;
  name: string;
  ticker: string;
  category: 'stocks' | 'bonds' | 'crypto' | 'cash';
  sector: string;
  value: number;
  shares: number;
  price: number;
  change: number;
  changePercent: number;
}

export interface PortfolioSummary {
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  assets: Asset[];
}

export interface TimeseriesData {
  date: string;
  value: number;
}

// Generate mock portfolio data
export const generatePortfolioData = (): PortfolioSummary => {
  const assets: Asset[] = [
    {
      id: '1',
      name: 'Apple Inc.',
      ticker: 'AAPL',
      category: 'stocks',
      sector: 'Technology',
      value: 150000,
      shares: 850,
      price: 176.47,
      change: 2.35,
      changePercent: 1.35,
    },
    {
      id: '2',
      name: 'US Treasury Bond',
      ticker: 'GOVT',
      category: 'bonds',
      sector: 'Government',
      value: 75000,
      shares: 1000,
      price: 75.00,
      change: -0.25,
      changePercent: -0.33,
    },
    {
      id: '3',
      name: 'Bitcoin',
      ticker: 'BTC',
      category: 'crypto',
      sector: 'Cryptocurrency',
      value: 50000,
      shares: 1.5,
      price: 33333.33,
      change: 1250,
      changePercent: 3.89,
    },
    {
      id: '4',
      name: 'Cash Reserve',
      ticker: 'USD',
      category: 'cash',
      sector: 'Cash',
      value: 25000,
      shares: 25000,
      price: 1,
      change: 0,
      changePercent: 0,
    },
  ];

  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalChange = assets.reduce((sum, asset) => sum + asset.change, 0);
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

  return {
    totalValue,
    totalChange,
    totalChangePercent,
    assets,
  };
};

// Generate mock timeseries data
export const generateTimeseriesData = (days: number): TimeseriesData[] => {
  const data: TimeseriesData[] = [];
  const startValue = 250000;
  let currentValue = startValue;

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Add some random variation
    const change = (Math.random() - 0.5) * 5000;
    currentValue += change;
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(currentValue),
    });
  }

  return data;
};