import React, { useState } from 'react';

interface Property {
  id: number;
  address: string;
  model: string;
  price: string;
  priceValue: number;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  yearBuilt?: string;
  lotSize?: string;
  features: string;
  status: string;
  propertyType: string;
  specialFeatures: string[];
  description: string;
  mlsNumber?: string;
  image: string;
  gallery?: string[];
}

const SolivitaHomeSearches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [bedroomFilter, setBedroomFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extended property data for the home searches page
  const properties: Property[] = [
    {
      id: 1,
      address: '650 Portofino Drive',
      model: 'Allegro',
      price: '$298,000',
      priceValue: 298000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,467 SF',
      yearBuilt: '2018',
      lotSize: '0.15 acres',
      features: 'Pond & Conservation View',
      status: 'Pending',
      propertyType: 'Villa',
      specialFeatures: ['Conservation View', 'Waterfront', 'Screened Porch', 'Updated Kitchen'],
      description: 'Beautiful Allegro model with stunning pond and conservation views. This well-maintained villa features an open floor plan, updated kitchen with granite countertops, and a screened porch perfect for enjoying Florida\'s year-round sunshine.',
      mlsNumber: 'S5012345',
      image: 'https://ext.same-assets.com/666394337/2194590836.jpeg',
      gallery: [
        'https://ext.same-assets.com/666394337/2194590836.jpeg',
        'https://ext.same-assets.com/666394337/3992974798.jpeg'
      ]
    },
    {
      id: 2,
      address: '233 Rialto Road',
      model: 'Bordeaux',
      price: '$269,000',
      priceValue: 269000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,543 SF',
      yearBuilt: '2017',
      lotSize: '0.12 acres',
      features: 'Waterfront Property',
      status: 'Active',
      propertyType: 'Condo',
      specialFeatures: ['Waterfront', 'Updated Kitchen', 'Master Suite', 'Garage'],
      description: 'Stunning waterfront Bordeaux model condo with panoramic water views. Features include a gourmet kitchen, spacious master suite, and attached garage. Perfect for those seeking luxury living in Solivita.',
      mlsNumber: 'S5012346',
      image: 'https://ext.same-assets.com/666394337/3992974798.jpeg'
    },
    {
      id: 3,
      address: '318 Rock Springs Drive',
      model: 'Mozart',
      price: '$349,000',
      priceValue: 349000,
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: '2,288 SF',
      yearBuilt: '2019',
      lotSize: '0.18 acres',
      features: 'Premium Location',
      status: 'Active',
      propertyType: 'Single Family',
      specialFeatures: ['Master Suite', 'Garage', 'Screened Porch', 'Golf Course View'],
      description: 'Spacious Mozart model home in premium location. This single-family home offers an open concept design, large master suite, and beautiful golf course views from the screened porch.',
      mlsNumber: 'S5012347',
      image: 'https://ext.same-assets.com/666394337/3612349291.jpeg'
    },
    {
      id: 4,
      address: '684 San Augusto Drive',
      model: 'Basta',
      price: '$539,000',
      priceValue: 539000,
      bedrooms: 3,
      bathrooms: 3,
      sqft: '2,363 SF',
      yearBuilt: '2020',
      lotSize: '0.25 acres',
      features: 'Conservation & Pool',
      status: 'Active',
      propertyType: 'Single Family',
      specialFeatures: ['Conservation View', 'Pool', 'Screened Porch', 'Garage', 'Master Suite'],
      description: 'Luxury Basta model with private pool and conservation views. This executive home features 3 bedrooms, 3 bathrooms, and premium finishes throughout. The screened pool area is perfect for entertaining.',
      mlsNumber: 'S5012348',
      image: 'https://ext.same-assets.com/666394337/2396488544.jpeg'
    },
    {
      id: 5,
      address: '681 San Joaquin Road',
      model: 'Cambria',
      price: '$435,000',
      priceValue: 435000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: '2,235 SF',
      yearBuilt: '2018',
      lotSize: '0.20 acres',
      features: 'Golf Course Views',
      status: 'Pending',
      propertyType: 'Villa',
      specialFeatures: ['Golf Course View', 'Updated Kitchen', 'Master Suite', 'Screened Porch'],
      description: 'Elegant Cambria villa with spectacular golf course views. Features include a gourmet kitchen with granite countertops, spacious master suite, and large screened porch overlooking the fairway.',
      mlsNumber: 'S5012349',
      image: 'https://ext.same-assets.com/666394337/3496320437.jpeg'
    },
    {
      id: 6,
      address: '742 San Joaquin Road',
      model: 'Calabria',
      price: '$364,500',
      priceValue: 364500,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,975 SF',
      yearBuilt: '2019',
      lotSize: '0.16 acres',
      features: 'Move-in Ready',
      status: 'Active',
      propertyType: 'Villa',
      specialFeatures: ['Screened Porch', 'Master Suite', 'Updated Kitchen', 'Garage'],
      description: 'Move-in ready Calabria villa with modern updates throughout. This well-appointed home features a split bedroom plan, updated kitchen, and peaceful screened porch for relaxation.',
      mlsNumber: 'S5012350',
      image: 'https://ext.same-assets.com/666394337/3908457727.jpeg'
    },
    {
      id: 7,
      address: '804 San Raphael Street',
      model: 'Pesaro',
      price: '$522,500',
      priceValue: 522500,
      bedrooms: 3,
      bathrooms: 3.5,
      sqft: '2,782 SF',
      yearBuilt: '2021',
      lotSize: '0.28 acres',
      features: 'Conservation & Pool',
      status: 'Active',
      propertyType: 'Single Family',
      specialFeatures: ['Conservation View', 'Pool', 'Garage', 'Master Suite', 'Screened Porch'],
      description: 'Stunning Pesaro model with private pool and conservation preserve views. This luxury home offers 3 bedrooms plus den, 3.5 bathrooms, and premium upgrades throughout.',
      mlsNumber: 'S5012351',
      image: 'https://ext.same-assets.com/666394337/550773789.jpeg'
    },
    {
      id: 8,
      address: '343 Scripps Ranch Road',
      model: 'Tangier',
      price: '$310,000',
      priceValue: 310000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,556 SF',
      yearBuilt: '2017',
      lotSize: '0.14 acres',
      features: 'Conservation Views',
      status: 'Active',
      propertyType: 'Condo',
      specialFeatures: ['Conservation View', 'Updated Kitchen', 'Master Suite'],
      description: 'Charming Tangier condo with serene conservation views. This well-maintained unit features an open floor plan, updated kitchen, and peaceful setting backing to conservation area.',
      mlsNumber: 'S5012352',
      image: 'https://ext.same-assets.com/666394337/3668335012.jpeg'
    }
  ];

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => {
      const matchesSearch = property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.features.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = !priceFilter || 
        (priceFilter === 'under-300' && property.priceValue < 300000) ||
        (priceFilter === '300-400' && property.priceValue >= 300000 && property.priceValue < 400000) ||
        (priceFilter === '400-500' && property.priceValue >= 400000 && property.priceValue < 500000) ||
        (priceFilter === 'over-500' && property.priceValue >= 500000);
      
      const matchesBedrooms = !bedroomFilter || property.bedrooms >= parseInt(bedroomFilter);
      const matchesStatus = !statusFilter || property.status === statusFilter;
      
      return matchesSearch && matchesPrice && matchesBedrooms && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceValue - b.priceValue;
        case 'price-high':
          return b.priceValue - a.priceValue;
        case 'sqft-high':
          return parseInt(b.sqft.replace(/[^0-9]/g, '')) - parseInt(a.sqft.replace(/[^0-9]/g, ''));
        case 'newest':
          return (b.yearBuilt || '2020').localeCompare(a.yearBuilt || '2020');
        default:
          return 0;
      }
    });

  const handlePropertyClick = (property: Property) => {
    alert(`Property Details:\n\nAddress: ${property.address}\nModel: ${property.model}\nPrice: ${property.price}\nMLS#: ${property.mlsNumber}\n\n${property.description}`);
  };

  const handleScheduleShowing = (property: Property) => {
    const subject = `Schedule Showing - ${property.address}`;
    const body = `Hi, I'm interested in scheduling a showing for:\n\nProperty: ${property.address}\nModel: ${property.model}\nPrice: ${property.price}\nMLS#: ${property.mlsNumber}\n\nPlease let me know your availability. Thank you!`;
    window.location.href = `mailto:sborchini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Sold':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Home Searches</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Discover your perfect home in Solivita's premier 55+ active adult community. 
              Browse our current listings and find the lifestyle you've been dreaming of.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">Search Properties</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Address, model, or features..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              />
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Price Range</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="under-300">Under $300K</option>
                <option value="300-400">$300K - $400K</option>
                <option value="400-500">$400K - $500K</option>
                <option value="over-500">Over $500K</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Bedrooms</label>
              <select
                value={bedroomFilter}
                onChange={(e) => setBedroomFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Sold">Sold</option>
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
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="sqft-high">Square Feet: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Results and View Toggle */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <div className="text-gray-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-navy text-white' : 'bg-gray-200 text-gray-600'}`}
                aria-label="Grid view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-navy text-white' : 'bg-gray-200 text-gray-600'}`}
                aria-label="List view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="container mx-auto px-4 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search criteria to see more results.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredProperties.map((property) => (
              <div key={property.id} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                {/* Property Image */}
                <div className={`relative overflow-hidden cursor-pointer ${
                  viewMode === 'list' ? 'w-80 h-64 flex-shrink-0' : 'h-64'
                }`} onClick={() => handlePropertyClick(property)}>
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-navy text-white px-3 py-1 rounded-full text-lg font-bold">
                    {property.price}
                  </div>
                  
                  {/* MLS Number */}
                  {property.mlsNumber && (
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      MLS# {property.mlsNumber}
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-navy">{property.address}</h3>
                    {viewMode === 'list' && (
                      <span className="text-sm text-gray-500">{property.propertyType}</span>
                    )}
                  </div>
                  <p className="text-teal font-semibold mb-3">{property.model}</p>

                  {/* Property Stats */}
                  <div className={`grid ${viewMode === 'list' ? 'grid-cols-4' : 'grid-cols-3'} gap-4 text-gray-600 mb-4`}>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10,2V6H12V2H16V6H18A2,2 0 0,1 20,8V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V8A2,2 0 0,1 6,6H8V2H10M18,19V10H6V19H18Z" />
                      </svg>
                      <span className="text-sm">{property.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23,11H21A2,2 0 0,0 19,13V16A2,2 0 0,0 21,18H23V11M1,11V18H3A2,2 0 0,0 5,16V13A2,2 0 0,0 3,11H1M21,9H18V5A2,2 0 0,0 16,3H8A2,2 0 0,0 6,5V9H3A2,2 0 0,0 1,11V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V11A2,2 0 0,0 21,9Z" />
                      </svg>
                      <span className="text-sm">{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
                      </svg>
                      <span className="text-sm">{property.sqft}</span>
                    </div>
                    {viewMode === 'list' && property.yearBuilt && (
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                        </svg>
                        <span className="text-sm">Built {property.yearBuilt}</span>
                      </div>
                    )}
                  </div>

                  {/* Description (List view only) */}
                  {viewMode === 'list' && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>
                  )}

                  {/* Special Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {property.specialFeatures.slice(0, viewMode === 'list' ? 4 : 2).map((feature, index) => (
                        <span key={index} className="inline-block bg-cream text-navy px-2 py-1 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                      {property.specialFeatures.length > (viewMode === 'list' ? 4 : 2) && (
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{property.specialFeatures.length - (viewMode === 'list' ? 4 : 2)} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-2 ${viewMode === 'list' ? 'flex-col' : ''}`}>
                    <button 
                      onClick={() => handlePropertyClick(property)}
                      className="flex-1 bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleScheduleShowing(property)}
                      className="flex-1 bg-teal text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Schedule Showing
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our experienced team is here to help you navigate the Solivita real estate market. 
            Contact us today for personalized assistance and exclusive access to new listings.
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
  );
};

export default SolivitaHomeSearches;