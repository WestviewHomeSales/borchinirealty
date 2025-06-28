import React, { useState } from 'react';
import PropertySearch from './PropertySearch';

interface SearchFilters {
  priceRange: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  features: string[];
}

const PropertyListings = () => {
  const [filter, setFilter] = useState('All');
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    features: []
  });

  const properties = [
    {
      id: 1,
      address: '650 Portofino Drive',
      model: 'Allegro',
      price: '$298,000',
      priceValue: 298000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,467 SF',
      features: 'Pond & Conservation',
      status: 'Pending',
      propertyType: 'villa',
      specialFeatures: ['Conservation View', 'Waterfront'],
      image: 'https://ext.same-assets.com/666394337/2194590836.jpeg'
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
      features: 'Waterfront',
      status: 'Active',
      propertyType: 'condo',
      specialFeatures: ['Waterfront', 'Updated Kitchen'],
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
      features: '',
      status: 'Active',
      propertyType: 'single-family',
      specialFeatures: ['Master Suite', 'Garage'],
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
      features: 'Conservation',
      status: 'Active',
      propertyType: 'single-family',
      specialFeatures: ['Conservation View', 'Pool', 'Screened Porch'],
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
      features: '',
      status: 'Pending',
      propertyType: 'villa',
      specialFeatures: ['Golf Course View', 'Updated Kitchen'],
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
      features: '',
      status: 'Active',
      propertyType: 'villa',
      specialFeatures: ['Screened Porch', 'Master Suite'],
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
      features: 'Conservation',
      status: 'Active',
      propertyType: 'single-family',
      specialFeatures: ['Conservation View', 'Pool', 'Garage', 'Master Suite'],
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
      features: 'Conservation',
      status: 'Active',
      propertyType: 'condo',
      specialFeatures: ['Conservation View', 'Updated Kitchen'],
      image: 'https://ext.same-assets.com/666394337/3668335012.jpeg'
    },
    {
      id: 9,
      address: '167 Bell Tower Xing W',
      model: 'Cabernet',
      price: '$1,800',
      priceValue: 1800,
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,387 SF',
      features: 'Rental Property',
      status: 'Active Rental',
      propertyType: 'condo',
      specialFeatures: ['Waterfront'],
      image: 'https://ext.same-assets.com/666394337/3811111426.jpeg'
    }
  ];

  const filters = ['All', 'Active', 'Pending', 'Active Rental'];

  const applyFilters = (property: any) => {
    // Status filter
    if (filter !== 'All' && property.status !== filter) {
      return false;
    }

    // Price range filter
    if (searchFilters.priceRange) {
      const [min, max] = searchFilters.priceRange.split('-').map(p => p.replace('+', ''));
      const minPrice = parseInt(min) || 0;
      const maxPrice = max ? parseInt(max) : Infinity;
      
      if (property.priceValue < minPrice || property.priceValue > maxPrice) {
        return false;
      }
    }

    // Bedrooms filter
    if (searchFilters.bedrooms && property.bedrooms < parseInt(searchFilters.bedrooms)) {
      return false;
    }

    // Bathrooms filter
    if (searchFilters.bathrooms && property.bathrooms < parseInt(searchFilters.bathrooms)) {
      return false;
    }

    // Property type filter
    if (searchFilters.propertyType && property.propertyType !== searchFilters.propertyType) {
      return false;
    }

    // Features filter
    if (searchFilters.features.length > 0) {
      const hasAllFeatures = searchFilters.features.every(feature => 
        property.specialFeatures.includes(feature)
      );
      if (!hasAllFeatures) {
        return false;
      }
    }

    return true;
  };

  const filteredProperties = properties.filter(applyFilters);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Active Rental':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handlePropertyClick = (property: any) => {
    // In a real app, this would navigate to a detailed property page
    alert(`View details for ${property.address}\nModel: ${property.model}\nPrice: ${property.price}`);
  };

  const handleScheduleShowing = (property: any) => {
    const subject = `Schedule Showing - ${property.address}`;
    const body = `Hi, I'm interested in scheduling a showing for the property at ${property.address} (${property.model}). Please let me know your availability.`;
    window.location.href = `mailto:sborchini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Borchini Realty Listings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes in Solivita's prestigious 55+ community.
            Our extensive portfolio features everything from cozy condos to luxury estates.
          </p>
        </div>

        {/* Advanced Search */}
        <PropertySearch onSearch={handleSearch} />

        {/* Status Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === filterOption
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-100 text-navy hover:bg-gray-200'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handlePropertyClick(property)}>
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
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{property.address}</h3>
                <p className="text-teal font-semibold mb-3">{property.model}</p>

                <div className="flex items-center justify-between text-gray-600 mb-4">
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
                </div>

                {/* Special Features */}
                {property.specialFeatures.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {property.specialFeatures.slice(0, 2).map((feature, index) => (
                        <span key={index} className="inline-block bg-cream text-navy px-2 py-1 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                      {property.specialFeatures.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{property.specialFeatures.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button 
                    onClick={() => handlePropertyClick(property)}
                    className="flex-1 bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all group-hover:bg-teal"
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

        {/* No results message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria to see more results.</p>
            <button
              onClick={() => {
                setFilter('All');
                setSearchFilters({
                  priceRange: '',
                  bedrooms: '',
                  bathrooms: '',
                  propertyType: '',
                  features: []
                });
              }}
              className="bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load more button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              View All {properties.length}+ Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyListings;