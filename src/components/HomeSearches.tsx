import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSearches = () => {
  const navigate = useNavigate();

  const searchCategories = [
    {
      id: 'all-homes',
      title: 'All Homes For Sale',
      icon: '🏠',
      filter: { type: 'all' }
    },
    {
      id: 'waterfront',
      title: 'Waterfront Homes',
      icon: '🏠',
      filter: { features: ['Waterfront'] }
    },
    {
      id: 'golf-course',
      title: 'Golf Course Homes',
      icon: '🏠',
      filter: { features: ['Golf Course View'] }
    },
    {
      id: 'conservation',
      title: 'Conservation View Homes',
      icon: '🏠',
      filter: { features: ['Conservation View'] }
    },
    {
      id: 'pool-homes',
      title: 'Pool Homes',
      icon: '🏠',
      filter: { features: ['Pool'] }
    },
    {
      id: 'pending',
      title: 'Homes Pending Under Contract',
      icon: '🏠',
      filter: { status: 'Pending' }
    }
  ];

  const priceRanges = [
    {
      id: 'price-all',
      title: 'Homes For Sale By Price',
      icon: '🏠',
      filter: { type: 'price-overview' }
    },
    {
      id: 'price-0-200',
      title: '$0-$200,000',
      icon: '🏠',
      filter: { priceRange: '0-200000' }
    },
    {
      id: 'price-200-300',
      title: '$200,000-$300,000',
      icon: '🏠',
      filter: { priceRange: '200000-300000' }
    },
    {
      id: 'price-300-400',
      title: '$300,000-$400,000',
      icon: '🏠',
      filter: { priceRange: '300000-400000' }
    },
    {
      id: 'price-400-500',
      title: '$400,000-$500,000',
      icon: '🏠',
      filter: { priceRange: '400000-500000' }
    },
    {
      id: 'price-500-plus',
      title: '$500,000 +',
      icon: '🏠',
      filter: { priceRange: '500000+' }
    }
  ];

  const handleSearchClick = (filter: any, title: string) => {
    // Special handling for "All Homes For Sale" - redirect to external IDX site
    if (filter.type === 'all') {
      window.open('https://borchinirealty.idxbroker.com/i/all-solivita-homes', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "Waterfront Homes" - redirect to external IDX site
    if (filter.features && filter.features.includes('Waterfront')) {
      window.open('https://borchinirealty.idxbroker.com/i/waterfront-homes', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "Golf Course Homes" - redirect to external IDX site
    if (filter.features && filter.features.includes('Golf Course View')) {
      window.open('https://borchinirealty.idxbroker.com/i/golf-course-homes', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "Conservation View Homes" - redirect to external IDX site
    if (filter.features && filter.features.includes('Conservation View')) {
      window.open('https://borchinirealty.idxbroker.com/i/conservation-view-homes-for-sale', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "Pool Homes" - redirect to external IDX site
    if (filter.features && filter.features.includes('Pool')) {
      window.open('https://borchinirealty.idxbroker.com/i/pool-homes', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "Homes Pending Under Contract" - redirect to external IDX site
    if (filter.status === 'Pending') {
      window.open('https://borchinirealty.idxbroker.com/i/pending-under-contract', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "$0-$200,000" - redirect to external IDX site
    if (filter.priceRange === '0-200000') {
      window.open('https://borchinirealty.idxbroker.com/i/0-200000', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "$200,000-$300,000" - redirect to external IDX site
    if (filter.priceRange === '200000-300000') {
      window.open('https://borchinirealty.idxbroker.com/i/200000-300000', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "$300,000-$400,000" - redirect to external IDX site
    if (filter.priceRange === '300000-400000') {
      window.open('https://borchinirealty.idxbroker.com/i/300000-400000', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special handling for "$400,000-$500,000" - redirect to external IDX site
    if (filter.priceRange === '400000-500000') {
      window.open('https://borchinirealty.idxbroker.com/i/400000-500000', '_blank', 'noopener,noreferrer');
      return;
    }
    
    if (filter.type === 'price-overview') {
      // Show price overview
      navigate('/solivita-home-searches');
      return;
    }
    
    // For other searches, navigate to the Solivita Home Searches page with filters
    const searchParams = new URLSearchParams();
    
    if (filter.priceRange) {
      searchParams.set('priceRange', filter.priceRange);
    }
    
    if (filter.features) {
      searchParams.set('features', filter.features.join(','));
    }
    
    if (filter.status) {
      searchParams.set('status', filter.status);
    }
    
    // For now, navigate to the main search page
    // In a real app, you would pass these filters as URL parameters
    navigate('/solivita-home-searches');
    
    // Show what filter would be applied
    console.log(`Searching for: ${title}`, filter);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Home Searches</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Find your perfect home in Solivita's premier 55+ active adult community. 
              Choose from our specialized search categories below.
            </p>
          </div>
        </div>
      </div>

      {/* Search Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Property Types */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 text-center">Search by Property Type</h2>
              <div className="space-y-4">
                {searchCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleSearchClick(category.filter, category.title)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-left px-6 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center group"
                  >
                    <span className="text-yellow-400 mr-3 text-xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold">{category.title}</div>
                    </div>
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Price Ranges */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 text-center">Search by Price Range</h2>
              <div className="space-y-4">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => handleSearchClick(range.filter, range.title)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-left px-6 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center group"
                  >
                    <span className="text-yellow-400 mr-3 text-xl">{range.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold">{range.title}</div>
                    </div>
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Search Options */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Need Help Finding the Perfect Home?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our experienced team knows Solivita inside and out. We can help you find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+14077911789'}
                className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Call (407) 791-1789
              </button>
              <button
                onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Email Us Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold text-cream mb-2">150+</div>
                <div className="text-sm">Active Listings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream mb-2">25+</div>
                <div className="text-sm">Waterfront Homes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream mb-2">40+</div>
                <div className="text-sm">Golf Course Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream mb-2">30+</div>
                <div className="text-sm">Pool Homes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearches;