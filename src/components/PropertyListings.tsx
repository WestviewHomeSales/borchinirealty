import React, { useState } from 'react';

const PropertyListings = () => {
  const [filter, setFilter] = useState('All');

  const properties = [
    {
      id: 1,
      address: '650 Portofino Drive',
      model: 'Allegro',
      price: '$298,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,467 SF',
      features: 'Pond & Conservation',
      status: 'Pending',
      image: 'https://ext.same-assets.com/666394337/2194590836.jpeg'
    },
    {
      id: 2,
      address: '233 Rialto Road',
      model: 'Bordeaux',
      price: '$269,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,543 SF',
      features: 'Waterfront',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/3992974798.jpeg'
    },
    {
      id: 3,
      address: '318 Rock Springs Drive',
      model: 'Mozart',
      price: '$349,000',
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: '2,288 SF',
      features: '',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/3612349291.jpeg'
    },
    {
      id: 4,
      address: '684 San Augusto Drive',
      model: 'Basta',
      price: '$539,000',
      bedrooms: 3,
      bathrooms: 3,
      sqft: '2,363 SF',
      features: 'Conservation',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/2396488544.jpeg'
    },
    {
      id: 5,
      address: '681 San Joaquin Road',
      model: 'Cambria',
      price: '$435,000',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: '2,235 SF',
      features: '',
      status: 'Pending',
      image: 'https://ext.same-assets.com/666394337/3496320437.jpeg'
    },
    {
      id: 6,
      address: '742 San Joaquin Road',
      model: 'Calabria',
      price: '$364,500',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,975 SF',
      features: '',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/3908457727.jpeg'
    },
    {
      id: 7,
      address: '804 San Raphael Street',
      model: 'Pesaro',
      price: '$522,500',
      bedrooms: 3,
      bathrooms: 3.5,
      sqft: '2,782 SF',
      features: 'Conservation',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/550773789.jpeg'
    },
    {
      id: 8,
      address: '343 Scripps Ranch Road',
      model: 'Tangier',
      price: '$310,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,556 SF',
      features: 'Conservation',
      status: 'Active',
      image: 'https://ext.same-assets.com/666394337/3668335012.jpeg'
    },
    {
      id: 9,
      address: '167 Bell Tower Xing W',
      model: 'Cabernet',
      price: '$1,800',
      bedrooms: 2,
      bathrooms: 2,
      sqft: '1,387 SF',
      features: 'Rental Property',
      status: 'Active Rental',
      image: 'https://ext.same-assets.com/666394337/3811111426.jpeg'
    }
  ];

  const filters = ['All', 'Active', 'Pending', 'Active Rental'];

  const filteredProperties = filter === 'All'
    ? properties
    : properties.filter(property => property.status === filter);

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

        {/* Filter buttons */}
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

        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
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

                {property.features && (
                  <div className="mb-4">
                    <span className="inline-block bg-cream text-navy px-3 py-1 rounded-full text-sm font-medium">
                      {property.features}
                    </span>
                  </div>
                )}

                <button className="w-full bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all group-hover:bg-teal">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            View All {properties.length}+ Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
