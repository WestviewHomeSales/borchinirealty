import React, { useState } from 'react';

interface PropertySearchProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  priceRange: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  features: string[];
}

const PropertySearch: React.FC<PropertySearchProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    features: []
  });

  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-300000', label: 'Under $300,000' },
    { value: '300000-400000', label: '$300,000 - $400,000' },
    { value: '400000-500000', label: '$400,000 - $500,000' },
    { value: '500000+', label: '$500,000+' }
  ];

  const bedroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' }
  ];

  const bathroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' }
  ];

  const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'villa', label: 'Villa' },
    { value: 'condo', label: 'Condo' },
    { value: 'single-family', label: 'Single Family' }
  ];

  const availableFeatures = [
    'Waterfront',
    'Conservation View',
    'Golf Course View',
    'Pool',
    'Garage',
    'Screened Porch',
    'Updated Kitchen',
    'Master Suite'
  ];

  const handleFeatureToggle = (feature: string) => {
    setFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      priceRange: '',
      bedrooms: '',
      bathrooms: '',
      propertyType: '',
      features: []
    };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-navy mb-6">Find Your Perfect Home</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Price Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
          >
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
          >
            {bedroomOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Bathrooms</label>
          <select
            value={filters.bathrooms}
            onChange={(e) => setFilters(prev => ({ ...prev, bathrooms: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
          >
            {bathroomOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Property Type</label>
          <select
            value={filters.propertyType}
            onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
          >
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-navy mb-3">Special Features</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {availableFeatures.map(feature => (
            <label key={feature} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="mr-2 rounded border-gray-300 text-blue-accent focus:ring-blue-accent"
              />
              <span className="text-sm text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleSearch}
          className="flex-1 bg-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Search Properties
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;