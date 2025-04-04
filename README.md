# Financial Portfolio Dashboard

## 📊 Overview

A sleek, interactive financial portfolio dashboard that visualizes investment data through intuitive charts and a stunning UI. This project delivers a comprehensive view of financial portfolios with animated visualizations, interactive analytics, and a beautiful dark/light mode design.

Built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion, this dashboard demonstrates advanced frontend capabilities with a focus on user experience and data visualization.

## ✨ Features

### 1. Portfolio Overview Dashboard
- Total portfolio value with animated percentage changes
- Interactive asset allocation donut chart
- Performance metrics with smooth counters
- Timeframe toggle with elegant transitions

### 2. Interactive Stock Charts
- Multi-timeframe stock visualization (1D to 5Y)
- Line/area/candlestick chart options
- Hover tooltips with detailed price information
- Animated transitions between data views

### 3. Portfolio Breakdown & Analysis
- Interactive pie charts for asset allocation
- Category filtering with animated transitions
- Sector distribution heatmap
- Drill-down capability into specific holdings

### 4. Performance Metrics Dashboard
- Return metrics with animated progress indicators
- Risk analysis visualization
- Benchmark comparison charts
- Performance timeline with interactive markers

### 5. What-If Scenario Simulator
- Portfolio rebalancing with drag-and-drop interface
- Real-time visualization of allocation changes
- Risk/return projections based on adjustments
- Before/after comparison views

### 6. Personalization & Theme System
- Drag-and-drop customizable dashboard layout
- Animated dark/light mode toggle
- Custom color palette options
- Layout persistence via local storage

### 7. Responsive Design with Device-Specific UX
- Optimized layouts for desktop, tablet, and mobile
- Touch-friendly controls and gestures
- Consistent experience across all devices

## 🛠️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Mock Data**: JSON files with realistic financial data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/financial-portfolio-dashboard.git
cd financial-portfolio-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
financial-portfolio-dashboard/
├── app/                   # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   ├── dashboard/         # Dashboard pages
│   ├── stocks/            # Stock detail pages
│   └── analytics/         # Analytics pages
├── components/            # React components
│   ├── ui/                # shadcn UI components
│   ├── charts/            # Chart components
│   ├── dashboard/         # Dashboard widgets
│   └── layout/            # Layout components
├── lib/                   # Utility functions and hooks
│   ├── data/              # Mock data files
│   ├── utils/             # Helper functions
│   └── hooks/             # Custom React hooks
├── styles/                # Global styles
├── public/                # Static assets
└── README.md              # Project documentation
```

## 🎨 UI Components

### Dashboard Widgets
- Portfolio Summary Card
- Asset Allocation Chart
- Performance Metrics
- Stock Holdings Table
- Market Overview

### Charts
- Line and Area Charts
- Candlestick Charts
- Pie and Donut Charts
- Heatmap Visualizations
- Performance Timeline

### Interactive Elements
- Timeframe Selectors
- Category Filters
- Allocation Sliders
- Theme Toggle
- Widget Customization Tools

## 💾 Mock Data

This project uses realistic mock data to simulate a financial portfolio. The data structure includes:

- Portfolio holdings and allocation
- Historical price data for stocks
- Performance metrics
- Transaction history
- Market benchmark data

No external APIs are required as all data is simulated within the application.

## 🎬 Animations

The dashboard features a variety of animations powered by Framer Motion:

- Page transitions
- Data update animations
- Chart drawing animations
- Micro-interactions
- Theme switching transitions

## 🔄 State Management

- React Context for global state
- Local component state for UI interactions
- localStorage for persisting user preferences
- Custom hooks for data management

## 📱 Responsive Design

The dashboard is fully responsive with three main breakpoints:

- **Desktop**: Multi-column layout with expanded visualizations
- **Tablet**: Adjusted layout with optimized chart sizes
- **Mobile**: Stacked layout with touch-friendly controls

## 🧩 Customization

Users can customize their dashboard experience:

- Rearrange dashboard widgets
- Toggle between dark and light mode
- Select different chart types and timeframes
- Save preferences for future sessions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)

---

Built with ♥ for [Hackathon Name]