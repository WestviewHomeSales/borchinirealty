import React, { useState } from 'react';

const SoldHomesPage = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Generate years from 2011 to 2025
  const years = Array.from({ length: 15 }, (_, i) => 2025 - i);

  const reportTypes = [
    {
      id: 'by-date',
      title: 'Homes Sold by Date',
      icon: '📅',
      description: 'View homes sold chronologically throughout the year',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'by-price',
      title: 'Homes Sold by Price',
      icon: '💰',
      description: 'Browse sold properties organized by sale price',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'by-sqft',
      title: 'Homes Sold by Square Footage',
      icon: '📐',
      description: 'Find sold homes sorted by square footage',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'percentage-change',
      title: 'Percentage Change',
      icon: '📊',
      description: 'Market trends and price change analysis',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const handleReportClick = (reportType: string, year: number) => {
    // In a real application, this would navigate to the specific report
    console.log(`Opening ${reportType} report for ${year}`);
    alert(`This would open the "${reportType}" report for ${year}\n\nReport would show detailed sales data organized by the selected criteria.`);
  };

  const getYearStats = (year: number) => {
    // Mock data - in a real app, this would come from an API
    const baseStats = {
      totalSold: Math.floor(Math.random() * 200) + 150,
      averagePrice: Math.floor(Math.random() * 100000) + 300000,
      averageDays: Math.floor(Math.random() * 30) + 45,
      priceChange: (Math.random() * 20 - 10).toFixed(1)
    };
    
    return baseStats;
  };

  const currentYearStats = getYearStats(selectedYear);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Sold Homes</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Comprehensive sales data and market analysis for Solivita properties from 2011 to 2025. 
              Track market trends and view detailed sales information by year.
            </p>
          </div>
        </div>
      </div>

      {/* Year Selection */}
      <div className="bg-white shadow-md py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Select Year</h2>
            <p className="text-gray-600">Choose a year to view detailed sales reports and market data</p>
          </div>
          
          {/* Year Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-15 gap-3 max-w-6xl mx-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${
                  selectedYear === year
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-gray-100 text-navy hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Year Stats */}
      <div className="bg-cream py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy text-center mb-8">
              {selectedYear} Market Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-navy mb-2">{currentYearStats.totalSold}</div>
                <div className="text-sm text-gray-600">Homes Sold</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-navy mb-2">
                  ${currentYearStats.averagePrice.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Average Price</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-navy mb-2">{currentYearStats.averageDays}</div>
                <div className="text-sm text-gray-600">Avg Days on Market</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  parseFloat(currentYearStats.priceChange) >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {parseFloat(currentYearStats.priceChange) >= 0 ? '+' : ''}{currentYearStats.priceChange}%
                </div>
                <div className="text-sm text-gray-600">Price Change</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              {selectedYear} Sales Reports
            </h2>
            <p className="text-lg text-gray-600">
              Choose how you'd like to view the sold homes data for {selectedYear}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reportTypes.map((report) => (
              <button
                key={report.id}
                onClick={() => handleReportClick(report.title, selectedYear)}
                className={`${report.color} text-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl text-left group`}
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{report.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{report.description}</p>
                    <div className="flex items-center text-sm opacity-80">
                      <span>View {selectedYear} data</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Market Trends Section */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Market Trends</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Price Trends */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <span className="text-2xl mr-3">📈</span>
                  Price Trends Over Time
                </h3>
                <p className="text-gray-600 mb-4">
                  Track how home prices in Solivita have changed from 2011 to {selectedYear}.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">2011-2015 Average:</span>
                    <span className="text-navy font-bold">$245,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">2016-2020 Average:</span>
                    <span className="text-navy font-bold">$285,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">2021-2025 Average:</span>
                    <span className="text-navy font-bold">$365,000</span>
                  </div>
                </div>
              </div>

              {/* Sales Volume */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏠</span>
                  Sales Volume Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Annual sales volume and market activity in Solivita community.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Peak Sales Year:</span>
                    <span className="text-navy font-bold">2022 (245 homes)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Average Annual Sales:</span>
                    <span className="text-navy font-bold">185 homes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Market Activity:</span>
                    <span className="text-green-600 font-bold">Strong</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Detailed Market Analysis?</h2>
            <p className="text-xl text-cream mb-8">
              Our team can provide comprehensive market reports and help you understand Solivita's real estate trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+14077911789'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Call for Market Report
              </button>
              <button
                onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                className="bg-cream text-navy px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Email for Analysis
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                View Current Listings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-navy mb-2">Market Reports</h3>
                <p className="text-sm text-gray-600">Quarterly and annual market analysis</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="font-semibold text-navy mb-2">Neighborhood Data</h3>
                <p className="text-sm text-gray-600">Sales by Solivita neighborhoods</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-navy mb-2">Investment Analysis</h3>
                <p className="text-sm text-gray-600">ROI and appreciation trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldHomesPage;