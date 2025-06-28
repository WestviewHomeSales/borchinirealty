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
  features: string;
  status: string;
  propertyType: string;
  specialFeatures: string[];
  image: string;
}

interface PropertyComparisonProps {
  properties: Property[];
}

const PropertyComparison: React.FC<PropertyComparisonProps> = ({ properties }) => {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToComparison = (property: Property) => {
    if (selectedProperties.length < 3 && !selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties(prev => [...prev, property]);
    }
  };

  const removeFromComparison = (propertyId: number) => {
    setSelectedProperties(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => {
    setSelectedProperties([]);
    setIsOpen(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getComparisonValue = (property: Property, field: string) => {
    switch (field) {
      case 'price':
        return property.priceValue;
      case 'bedrooms':
        return property.bedrooms;
      case 'bathrooms':
        return property.bathrooms;
      case 'sqft':
        return parseInt(property.sqft.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  };

  const getBestValue = (field: string) => {
    if (selectedProperties.length === 0) return null;
    
    const values = selectedProperties.map(p => getComparisonValue(p, field));
    
    if (field === 'price') {
      return Math.min(...values); // Lower price is better
    } else {
      return Math.max(...values); // Higher values are better for other fields
    }
  };

  const isHighlighted = (property: Property, field: string) => {
    const bestValue = getBestValue(field);
    return bestValue !== null && getComparisonValue(property, field) === bestValue;
  };

  return (
    <>
      {/* Floating Compare Button */}
      {selectedProperties.length > 0 && (
        <div className="fixed bottom-20 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-teal text-white px-4 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5v2h14V4zM6 19h12v2H6v-2z"/>
            </svg>
            <span>Compare ({selectedProperties.length})</span>
          </button>
        </div>
      )}

      {/* Comparison Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-navy">Property Comparison</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={clearComparison}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close comparison"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {selectedProperties.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5v2h14V4zM6 19h12v2H6v-2z"/>
                  </svg>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">No properties selected</h4>
                  <p className="text-gray-600">Add properties to comparison to see them side by side.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-4 border-b font-semibold text-navy">Property</th>
                        {selectedProperties.map(property => (
                          <th key={property.id} className="text-center p-4 border-b min-w-64">
                            <div className="relative">
                              <img
                                src={property.image}
                                alt={property.address}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                              />
                              <button
                                onClick={() => removeFromComparison(property.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                                aria-label="Remove from comparison"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Address */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Address</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className="p-4 border-b text-center">
                            <div className="font-semibold">{property.address}</div>
                            <div className="text-sm text-gray-600">{property.model}</div>
                          </td>
                        ))}
                      </tr>

                      {/* Price */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Price</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className={`p-4 border-b text-center font-semibold ${
                            isHighlighted(property, 'price') ? 'bg-green-100 text-green-800' : ''
                          }`}>
                            {property.price}
                          </td>
                        ))}
                      </tr>

                      {/* Bedrooms */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Bedrooms</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className={`p-4 border-b text-center ${
                            isHighlighted(property, 'bedrooms') ? 'bg-green-100 text-green-800' : ''
                          }`}>
                            {property.bedrooms}
                          </td>
                        ))}
                      </tr>

                      {/* Bathrooms */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Bathrooms</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className={`p-4 border-b text-center ${
                            isHighlighted(property, 'bathrooms') ? 'bg-green-100 text-green-800' : ''
                          }`}>
                            {property.bathrooms}
                          </td>
                        ))}
                      </tr>

                      {/* Square Footage */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Square Footage</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className={`p-4 border-b text-center ${
                            isHighlighted(property, 'sqft') ? 'bg-green-100 text-green-800' : ''
                          }`}>
                            {property.sqft}
                          </td>
                        ))}
                      </tr>

                      {/* Status */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Status</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className="p-4 border-b text-center">
                            <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                              property.status === 'Active' ? 'bg-green-100 text-green-800' :
                              property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {property.status}
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Special Features */}
                      <tr>
                        <td className="p-4 border-b font-medium text-navy">Special Features</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className="p-4 border-b text-center">
                            <div className="space-y-1">
                              {property.specialFeatures.map((feature, index) => (
                                <span key={index} className="inline-block bg-cream text-navy px-2 py-1 rounded-full text-xs font-medium mr-1 mb-1">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Actions */}
                      <tr>
                        <td className="p-4 font-medium text-navy">Actions</td>
                        {selectedProperties.map(property => (
                          <td key={property.id} className="p-4 text-center">
                            <div className="space-y-2">
                              <button className="w-full bg-navy text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all">
                                View Details
                              </button>
                              <button className="w-full bg-teal text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all">
                                Schedule Showing
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyComparison;