import React from 'react';

const SitePlansPage = () => {
  const subdivisions = [
    { name: 'Map of Solivita', href: '/documents/map-of-solivita.pdf' },
    { name: 'Treviso', href: '/documents/treviso-site-plan.pdf' },
    { name: 'Alta Vista', href: '/documents/alta-vista-site-plan.pdf' },
    { name: 'Valencia', href: '/documents/valencia-site-plan.pdf' },
    { name: 'Bella Viana', href: '/documents/bella-viana-site-plan.pdf' },
    { name: 'Varese', href: '/documents/varese-site-plan.pdf' },
    { name: 'Candlewood Phase 2A', href: '/documents/candlewood-phase-2a-site-plan.pdf' },
    { name: 'Venezia', href: '/documents/venezia-site-plan.pdf' },
    { name: 'Candlewood Phase 2 B', href: '/documents/candlewood-phase-2b-site-plan.pdf' },
    { name: 'Verona', href: '/documents/verona-site-plan.pdf' },
    { name: 'Courtyards of Montelena', href: '/documents/courtyards-of-montelena-site-plan.pdf' },
    { name: 'Versilia', href: '/documents/versilia-site-plan.pdf' },
    { name: 'Lago Vista', href: '/documents/lago-vista-site-plan.pdf' },
    { name: 'Vestrella', href: '/documents/vestrella-site-plan.pdf' },
    { name: 'Mira Vista', href: '/documents/mira-vista-site-plan.pdf' },
    { name: 'Viareggio', href: '/documents/viareggio-site-plan.pdf' },
    { name: 'Portofino', href: '/documents/portofino-site-plan.pdf' },
    { name: 'Villa Verla', href: '/documents/villa-verla-site-plan.pdf' },
    { name: 'Portofino Phase 5I', href: '/documents/portofino-phase-5i-site-plan.pdf' },
    { name: 'Vizcaya', href: '/documents/vizcaya-site-plan.pdf' },
    { name: 'Rainbow Lakes', href: '/documents/rainbow-lakes-site-plan.pdf' },
    { name: 'Vittoria', href: '/documents/vittoria-site-plan.pdf' },
    { name: 'Terra Vista', href: '/documents/terra-vista-site-plan.pdf' },
    { name: 'Volare', href: '/documents/volare-site-plan.pdf' }
  ];

  const handleSubdivisionClick = (href: string, name: string) => {
    if (href.startsWith('http')) {
      // External link - open in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Internal PDF - in a real app, this would download or open the PDF
      console.log(`Opening site plan: ${name}`);
      // For demo purposes, show an alert
      alert(`This would open: ${name} Site Plan\nDocument URL: ${href}`);
    }
  };

  // Split subdivisions into two columns
  const leftColumn = subdivisions.slice(0, Math.ceil(subdivisions.length / 2));
  const rightColumn = subdivisions.slice(Math.ceil(subdivisions.length / 2));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Site Plans</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Explore detailed site plans for all Solivita subdivisions. Click on any subdivision name to view its specific site plan and layout.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-2">Solivita Sub-Division Site Plans</h2>
            
            <p className="text-blue-500 mb-8 text-lg">
              Solivita Sub-Division Site Plans. Click Individual Sub-Divisions for Maps.
            </p>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-3">
                {leftColumn.map((subdivision, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-black mr-2">●</span>
                    <button
                      onClick={() => handleSubdivisionClick(subdivision.href, subdivision.name)}
                      className="text-gray-700 hover:text-blue-600 hover:underline transition-colors text-left font-medium"
                    >
                      {subdivision.name}
                    </button>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {rightColumn.map((subdivision, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-black mr-2">●</span>
                    <button
                      onClick={() => handleSubdivisionClick(subdivision.href, subdivision.name)}
                      className="text-gray-700 hover:text-blue-600 hover:underline transition-colors text-left font-medium"
                    >
                      {subdivision.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Area Map */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <span className="text-black mr-2">📍</span>
                <button
                  onClick={() => handleSubdivisionClick('/documents/solivita-community-area-map.pdf', 'Solivita Community Area Map')}
                  className="text-gray-700 hover:text-blue-600 hover:underline transition-colors font-medium text-lg"
                >
                  Solivita Community Area Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Need Help Finding a Specific Area?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team knows every subdivision in Solivita and can help you understand the layout, amenities, and features of each area.
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
                Email for Site Plans
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
              >
                View Available Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subdivision Features */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Subdivision Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏞️</div>
                <h3 className="font-semibold text-navy mb-2">Conservation Views</h3>
                <p className="text-sm text-gray-600">Many subdivisions back to protected conservation areas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⛳</div>
                <h3 className="font-semibold text-navy mb-2">Golf Course Living</h3>
                <p className="text-sm text-gray-600">Premium lots with stunning golf course views</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏊</div>
                <h3 className="font-semibold text-navy mb-2">Waterfront Properties</h3>
                <p className="text-sm text-gray-600">Lakefront and pond view homesites available</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🚶</div>
                <h3 className="font-semibold text-navy mb-2">Walking Trails</h3>
                <p className="text-sm text-gray-600">Connected by scenic walking and biking paths</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">Explore More Solivita Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => window.location.href = '/floor-plans'}
                className="bg-navy text-white p-6 rounded-lg hover:bg-opacity-90 transition-all text-center group"
              >
                <div className="text-3xl mb-3">📐</div>
                <h3 className="font-semibold mb-2">Floor Plans</h3>
                <p className="text-sm opacity-90">Browse home designs and layouts</p>
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-teal text-white p-6 rounded-lg hover:bg-opacity-90 transition-all text-center group"
              >
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold mb-2">Home Searches</h3>
                <p className="text-sm opacity-90">Find available properties</p>
              </button>
              <button
                onClick={() => window.location.href = '/useful-info'}
                className="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-600 transition-all text-center group"
              >
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold mb-2">Useful Info</h3>
                <p className="text-sm opacity-90">Community guides and resources</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlansPage;