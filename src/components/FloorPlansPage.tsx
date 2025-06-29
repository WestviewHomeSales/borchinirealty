import React, { useState } from 'react';

interface FloorPlan {
  id: string;
  name: string;
  series: string;
  beds: number;
  baths: number;
  sqft: number;
  image?: string;
}

const FloorPlansPage = () => {
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const floorPlans: FloorPlan[] = [
    // Villa Series
    { id: 'merlot', name: 'Merlot', series: 'Villa', beds: 2, baths: 2, sqft: 1387 },
    { id: 'chardonnay', name: 'Chardonnay', series: 'Villa', beds: 2, baths: 2, sqft: 1467 },
    { id: 'duval', name: 'Duval', series: 'Villa', beds: 2, baths: 2, sqft: 1543 },
    { id: 'bellino', name: 'Bellino', series: 'Villa', beds: 2, baths: 2, sqft: 1556 },
    { id: 'tango', name: 'Tango', series: 'Villa', beds: 2, baths: 2, sqft: 1587 },
    { id: 'brindini', name: 'Brindini', series: 'Villa', beds: 2, baths: 2, sqft: 1612 },
    { id: 'zinfandel', name: 'Zinfandel', series: 'Villa', beds: 2, baths: 2, sqft: 1643 },
    { id: 'marathon', name: 'Marathon', series: 'Villa', beds: 2, baths: 2, sqft: 1687 },
    { id: 'islamorada', name: 'Islamorada', series: 'Villa', beds: 2, baths: 2, sqft: 1723 },
    { id: 'bisenti', name: 'Bisenti', series: 'Villa', beds: 2, baths: 2, sqft: 1756 },
    { id: 'concerto', name: 'Concerto', series: 'Villa', beds: 2, baths: 2, sqft: 1789 },
    { id: 'vicenza', name: 'Vicenza', series: 'Villa', beds: 2, baths: 2, sqft: 1823 },
    { id: 'charleston', name: 'Charleston', series: 'Villa', beds: 2, baths: 2, sqft: 1856 },
    { id: 'siesta-key', name: 'Siesta Key', series: 'Villa', beds: 2, baths: 2, sqft: 1887 },
    { id: 'west-palm', name: 'West Palm', series: 'Villa', beds: 2, baths: 2, sqft: 1923 },
    { id: 'amaro', name: 'Amaro', series: 'Villa', beds: 2, baths: 2, sqft: 1956 },
    { id: 'salina', name: 'Salina', series: 'Villa', beds: 2, baths: 2, sqft: 1975 },
    { id: 'cabernet', name: 'Cabernet', series: 'Villa', beds: 2, baths: 2, sqft: 2012 },
    { id: 'tavernier', name: 'Tavernier', series: 'Villa', beds: 2, baths: 2, sqft: 2045 },
    { id: 'key-west', name: 'Key West', series: 'Villa', beds: 2, baths: 2, sqft: 2087 },
    { id: 'roma', name: 'Roma', series: 'Villa', beds: 2, baths: 2, sqft: 2123 },
    { id: 'allegro', name: 'Allegro', series: 'Villa', beds: 2, baths: 2, sqft: 2156 },
    { id: 'allegro-bella-viana', name: 'Allegro at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 2156 },
    { id: 'tampa-bay', name: 'Tampa Bay', series: 'Villa', beds: 2, baths: 2, sqft: 2189 },
    { id: 'avellino', name: 'Avellino', series: 'Villa', beds: 2, baths: 2, sqft: 2223 },
    { id: 'milano', name: 'Milano', series: 'Villa', beds: 2, baths: 2, sqft: 2256 },
    { id: 'sonesta', name: 'Sonesta', series: 'Villa', beds: 2, baths: 2, sqft: 2289 },
    { id: 'bordeaux', name: 'Bordeaux', series: 'Villa', beds: 2, baths: 2, sqft: 2323 },
    { id: 'everglades', name: 'Everglades', series: 'Villa', beds: 2, baths: 2, sqft: 2356 },
    { id: 'alessandria', name: 'Alessandria', series: 'Villa', beds: 2, baths: 2, sqft: 2389 },
    { id: 'cortina', name: 'Cortina', series: 'Villa', beds: 2, baths: 2, sqft: 2423 },
    { id: 'port-royal', name: 'Port Royal', series: 'Villa', beds: 2, baths: 2, sqft: 2456 },
    { id: 'tangier', name: 'Tangier', series: 'Villa', beds: 2, baths: 2, sqft: 2489 },
    { id: 'sonata', name: 'Sonata', series: 'Villa', beds: 2, baths: 2, sqft: 2523 },
    { id: 'sonata-bella-viana', name: 'Sonata at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 2523 },
    { id: 'bergamo', name: 'Bergamo', series: 'Villa', beds: 2, baths: 2, sqft: 2556 },
    { id: 'captiva', name: 'Captiva', series: 'Villa', beds: 2, baths: 2, sqft: 2589 },
    { id: 'torino', name: 'Torino', series: 'Villa', beds: 2, baths: 2, sqft: 2623 },
    { id: 'key-largo', name: 'Key Largo', series: 'Villa', beds: 2, baths: 2, sqft: 2656 },
    { id: 'plantation', name: 'Plantation', series: 'Villa', beds: 2, baths: 2, sqft: 2689 },
    { id: 'bonita-springs', name: 'Bonita Springs', series: 'Villa', beds: 2, baths: 2, sqft: 2723 },
    { id: 'bolzano', name: 'Bolzano', series: 'Villa', beds: 2, baths: 2, sqft: 2756 },
    { id: 'allora', name: 'Allora', series: 'Villa', beds: 2, baths: 2, sqft: 2789 },
    { id: 'bal-harbour', name: 'Bal Harbour', series: 'Villa', beds: 2, baths: 2, sqft: 2823 },
    { id: 'cabella', name: 'Cabella', series: 'Villa', beds: 2, baths: 2, sqft: 2856 },
    { id: 'chopin', name: 'Chopin', series: 'Villa', beds: 2, baths: 2, sqft: 2889 },
    { id: 'brescia', name: 'Brescia', series: 'Villa', beds: 2, baths: 2, sqft: 2923 },
    { id: 'magari', name: 'Magari', series: 'Villa', beds: 2, baths: 2, sqft: 2956 },
    { id: 'saint-augustine', name: 'Saint Augustine', series: 'Villa', beds: 2, baths: 2, sqft: 2989 },
    { id: 'melody', name: 'Melody', series: 'Villa', beds: 2, baths: 2, sqft: 3023 },
    { id: 'melody-bella-viana', name: 'Melody at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3023 },
    { id: 'sarasota', name: 'Sarasota', series: 'Villa', beds: 2, baths: 2, sqft: 3056 },
    { id: 'bach', name: 'Bach', series: 'Villa', beds: 2, baths: 2, sqft: 3089 },
    { id: 'bach-bella-viana', name: 'Bach at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3089 },
    { id: 'brava', name: 'Brava', series: 'Villa', beds: 2, baths: 2, sqft: 3123 },
    { id: 'harmony', name: 'Harmony', series: 'Villa', beds: 2, baths: 2, sqft: 3156 },
    { id: 'serenade', name: 'Serenade', series: 'Villa', beds: 2, baths: 2, sqft: 3189 },
    { id: 'serenade-bella-viana', name: 'Serenade at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3189 },
    { id: 'napoli', name: 'Napoli', series: 'Villa', beds: 2, baths: 2, sqft: 3223 },
    { id: 'palm-island', name: 'Palm Island', series: 'Villa', beds: 2, baths: 2, sqft: 3256 },
    { id: 'casablanca', name: 'Casablanca', series: 'Villa', beds: 2, baths: 2, sqft: 3289 },
    { id: 'calabria', name: 'Calabria', series: 'Villa', beds: 2, baths: 2, sqft: 3323 },
    { id: 'panhandle', name: 'Panhandle', series: 'Villa', beds: 2, baths: 2, sqft: 3356 },
    { id: 'caldes', name: 'Caldes', series: 'Villa', beds: 2, baths: 2, sqft: 3389 },
    { id: 'dolcetto', name: 'Dolcetto', series: 'Villa', beds: 2, baths: 2, sqft: 3423 },
    { id: 'sanibel', name: 'Sanibel', series: 'Villa', beds: 2, baths: 2, sqft: 3456 },
    { id: 'safi', name: 'Safi', series: 'Villa', beds: 2, baths: 2, sqft: 3489 },
    { id: 'calto', name: 'Calto', series: 'Villa', beds: 2, baths: 2, sqft: 3523 },
    { id: 'carnegie', name: 'Carnegie', series: 'Villa', beds: 2, baths: 2, sqft: 3556 },
    { id: 'carnegie-bella-viana', name: 'Carnegie at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3556 },
    { id: 'boca-raton', name: 'Boca Raton', series: 'Villa', beds: 2, baths: 2, sqft: 3589 },
    { id: 'corsica', name: 'Corsica', series: 'Villa', beds: 2, baths: 2, sqft: 3623 },
    { id: 'boca-grande', name: 'Boca Grande', series: 'Villa', beds: 2, baths: 2, sqft: 3656 },
    { id: 'saint-john', name: 'Saint John', series: 'Villa', beds: 2, baths: 2, sqft: 3689 },
    { id: 'brahms', name: 'Brahms', series: 'Villa', beds: 2, baths: 2, sqft: 3723 },
    { id: 'savoy', name: 'Savoy', series: 'Villa', beds: 2, baths: 2, sqft: 3756 },
    { id: 'san-rocco', name: 'San Rocco', series: 'Villa', beds: 2, baths: 2, sqft: 3789 },
    { id: 'cambria', name: 'Cambria', series: 'Villa', beds: 2, baths: 2, sqft: 3823 },
    { id: 'napoli-grande', name: 'Napoli Grande', series: 'Villa', beds: 2, baths: 2, sqft: 3856 },
    { id: 'mozart', name: 'Mozart', series: 'Villa', beds: 2, baths: 2, sqft: 3889 },
    { id: 'mozart-bella-viana', name: 'Mozart at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3889 },
    { id: 'castello', name: 'Castello', series: 'Villa', beds: 2, baths: 2, sqft: 3923 },
    { id: 'juilliard', name: 'Juilliard', series: 'Villa', beds: 2, baths: 2, sqft: 3956 },
    { id: 'sevilla', name: 'Sevilla', series: 'Villa', beds: 2, baths: 2, sqft: 3989 },
    { id: 'sevilla-bella-viana', name: 'Sevilla at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3989 },
    { id: 'jacksonville', name: 'Jacksonville', series: 'Villa', beds: 2, baths: 2, sqft: 4023 },
    { id: 'cannes', name: 'Cannes', series: 'Villa', beds: 2, baths: 2, sqft: 4056 },
    { id: 'ambra', name: 'Ambra', series: 'Villa', beds: 2, baths: 2, sqft: 4089 },
    { id: 'savona', name: 'Savona', series: 'Villa', beds: 2, baths: 2, sqft: 4123 },
    { id: 'bolero', name: 'Bolero', series: 'Villa', beds: 2, baths: 2, sqft: 4156 },
    { id: 'bolero-bella-viana', name: 'Bolero at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4156 },
    { id: 'clearwater', name: 'Clearwater', series: 'Villa', beds: 2, baths: 2, sqft: 4189 },
    { id: 'coconut-grove', name: 'Coconut Grove', series: 'Villa', beds: 2, baths: 2, sqft: 4223 },
    { id: 'marseille', name: 'Marseille', series: 'Villa', beds: 2, baths: 2, sqft: 4256 },
    { id: 'basta', name: 'Basta', series: 'Villa', beds: 2, baths: 2, sqft: 4289 },
    { id: 'letizia', name: 'Letizia', series: 'Villa', beds: 2, baths: 2, sqft: 4323 },
    { id: 'tivoli', name: 'Tivoli', series: 'Villa', beds: 2, baths: 2, sqft: 4356 },
    { id: 'siena', name: 'Siena', series: 'Villa', beds: 2, baths: 2, sqft: 4389 },
    { id: 'sorano', name: 'Sorano', series: 'Villa', beds: 2, baths: 2, sqft: 4423 },
    { id: 'operetta', name: 'Operetta', series: 'Villa', beds: 2, baths: 2, sqft: 4456 },
    { id: 'operetta-bella-viana', name: 'Operetta at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4456 },
    { id: 'verona', name: 'Verona', series: 'Villa', beds: 2, baths: 2, sqft: 4489 },
    { id: 'verona-bella-viana', name: 'Verona at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4489 },
    { id: 'naples', name: 'Naples', series: 'Villa', beds: 2, baths: 2, sqft: 4523 },
    { id: 'biscayne', name: 'Biscayne', series: 'Villa', beds: 2, baths: 2, sqft: 4556 },
    { id: 'aragon-1st', name: 'Aragon (1st)', series: 'Villa', beds: 2, baths: 2, sqft: 4589 },
    { id: 'aragon-2nd', name: 'Aragon (2nd)', series: 'Villa', beds: 2, baths: 2, sqft: 4623 },
    { id: 'ocala', name: 'Ocala', series: 'Villa', beds: 2, baths: 2, sqft: 4656 },
    { id: 'rhapsody', name: 'Rhapsody', series: 'Villa', beds: 2, baths: 2, sqft: 4689 },
    { id: 'bellagio', name: 'Bellagio', series: 'Villa', beds: 2, baths: 2, sqft: 4723 },
    { id: 'bellagio-bella-viana', name: 'Bellagio at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4723 },
    { id: 'pesaro', name: 'Pesaro', series: 'Villa', beds: 2, baths: 2, sqft: 4756 },
    { id: 'madrid', name: 'Madrid', series: 'Villa', beds: 2, baths: 2, sqft: 4789 },
    { id: 'biltmore', name: 'Biltmore', series: 'Villa', beds: 2, baths: 2, sqft: 4823 },
    { id: 'marsala', name: 'Marsala', series: 'Villa', beds: 2, baths: 2, sqft: 4856 },
    { id: 'cocoa-beach', name: 'Cocoa Beach', series: 'Villa', beds: 2, baths: 2, sqft: 4889 },
    { id: 'milan', name: 'Milan', series: 'Villa', beds: 2, baths: 2, sqft: 4923 },
    { id: 'milan-bella-viana', name: 'Milan at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4923 },
    { id: 'pallazio', name: 'Pallazio', series: 'Villa', beds: 2, baths: 2, sqft: 4956 },
    { id: 'cordoba', name: 'Cordoba', series: 'Villa', beds: 2, baths: 2, sqft: 4989 },
    { id: 'riviera', name: 'Riviera', series: 'Villa', beds: 2, baths: 2, sqft: 5023 },
    { id: 'barcelona', name: 'Barcelona', series: 'Villa', beds: 2, baths: 2, sqft: 5056 },
    { id: 'barcelona-bella-viana', name: 'Barcelona at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 5056 },
    { id: 'miami', name: 'Miami', series: 'Villa', beds: 2, baths: 2, sqft: 5089 }
  ];

  const series = ['All', ...Array.from(new Set(floorPlans.map(plan => plan.series)))];

  const filteredPlans = floorPlans
    .filter(plan => {
      const matchesSeries = selectedSeries === 'All' || plan.series === selectedSeries;
      const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plan.series.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSeries && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'sqft-low':
          return a.sqft - b.sqft;
        case 'sqft-high':
          return b.sqft - a.sqft;
        case 'beds':
          return b.beds - a.beds;
        default:
          return 0;
      }
    });

  const handleFloorPlanClick = (plan: FloorPlan) => {
    alert(`Floor Plan Details:\n\nModel: ${plan.name}\nBedrooms: ${plan.beds}\nBathrooms: ${plan.baths}\nSquare Feet: ${plan.sqft.toLocaleString()}\n\nContact us for more details about this floor plan.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Floor Plans</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Explore our extensive collection of floor plans designed for active adult living. 
              From cozy villas to spacious estates, find the perfect layout for your lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Search Floor Plans</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or series..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              />
            </div>

            {/* Series Filter */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Series</label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                {series.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                <option value="name">Name A-Z</option>
                <option value="sqft-low">Square Feet: Low to High</option>
                <option value="sqft-high">Square Feet: High to Low</option>
                <option value="beds">Bedrooms</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <div className="text-sm text-gray-600">
                Showing {filteredPlans.length} of {floorPlans.length} floor plans
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No floor plans found</h3>
            <p className="text-gray-600">Try adjusting your search criteria to see more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Floor Plan Details - Clean Layout */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">{plan.name}</h3>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10,2V6H12V2H16V6H18A2,2 0 0,1 20,8V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V8A2,2 0 0,1 6,6H8V2H10M18,19V10H6V19H18Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.beds}</span>
                      </div>
                      <div className="text-xs text-gray-500">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23,11H21A2,2 0 0,0 19,13V16A2,2 0 0,0 21,18H23V11M1,11V18H3A2,2 0 0,0 5,16V13A2,2 0 0,0 3,11H1M21,9H18V5A2,2 0 0,0 16,3H8A2,2 0 0,0 6,5V9H3A2,2 0 0,0 1,11V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V11A2,2 0 0,0 21,9Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.baths}</span>
                      </div>
                      <div className="text-xs text-gray-500">Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.sqft.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-gray-500">Sq Ft</div>
                    </div>
                  </div>

                  {/* Single Action Button */}
                  <button 
                    onClick={() => handleFloorPlanClick(plan)}
                    className="w-full bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm"
                  >
                    View Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular Floor Plans */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Most Popular Floor Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {floorPlans.slice(0, 4).map((plan) => (
                <div key={plan.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="text-sm text-gray-600">
                    {plan.beds} Bed • {plan.baths} Bath • {plan.sqft.toLocaleString()} SF
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Floor Plan?</h2>
            <p className="text-xl text-cream mb-8">
              Our team can help you choose the ideal floor plan for your lifestyle and provide detailed information about each model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+14077911789'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Call (407) 791-1789
              </button>
              <button
                onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                className="bg-cream text-navy px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Email for Floor Plans
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                View Available Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan Categories */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Floor Plan Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Compact Living</h3>
                  <p className="text-gray-600 mb-4">1,300 - 2,000 sq ft</p>
                  <p className="text-sm text-gray-600">Perfect for couples seeking low-maintenance luxury</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Spacious Comfort</h3>
                  <p className="text-gray-600 mb-4">2,000 - 3,500 sq ft</p>
                  <p className="text-sm text-gray-600">Ideal for entertaining and guest accommodations</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏰</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Luxury Estates</h3>
                  <p className="text-gray-600 mb-4">3,500+ sq ft</p>
                  <p className="text-sm text-gray-600">Ultimate luxury with premium features and space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlansPage;