import React from 'react';

const UsefulInfoPage = () => {
  const infoCategories = [
    {
      id: 'solivita-info',
      title: 'Solivita Info.',
      icon: '🏘️',
      description: 'Community information, amenities, and lifestyle guides',
      items: [
        { title: 'Solivita Reflections Magazine May 2025', href: '/documents/solivita-reflections-may-2025.pdf' },
        { title: 'Solivita Contact List May 2025', href: '/documents/solivita-contact-list-may-2025.pdf' },
        { title: 'Solivita Street Map', href: '/documents/solivita-street-map.pdf' },
        { title: 'Solivita in Pictures', href: 'https://www.solivitahoa.com/ImageGallery.php?lID=10021241' },
        { title: 'Community Amenities Guide', href: '/documents/amenities-guide.pdf' },
        { title: 'Activity Calendar', href: '/documents/activity-calendar.pdf' }
      ]
    },
    {
      id: 'buyer-seller-info',
      title: 'Buyer and Seller Info.',
      icon: '📋',
      description: 'Essential checklists and guides for buying and selling',
      items: [
        { title: "Buyer's Checklist 3/21/2025", href: '/documents/buyers-checklist-revised.pdf' },
        { title: "Seller's Checklist 5/28/2025", href: '/documents/sellers-checklist-revised.pdf' },
        { title: 'Mortgage Advice', href: '/documents/mortgage-advice.pdf' },
        { title: 'Home Preparation Checklist For Taking Pictures 11/16/2024', href: '/documents/home-preparation-checklist.pdf' },
        { title: 'Market Analysis Report', href: '/documents/market-analysis.pdf' },
        { title: 'Closing Process Guide', href: '/documents/closing-process.pdf' }
      ]
    },
    {
      id: 'tax-exemptions',
      title: 'Tax Exemptions',
      icon: '💰',
      description: 'Florida tax benefits and exemption information',
      items: [
        { title: 'Florida Homestead Exemption Guide', href: '/documents/homestead-exemption.pdf' },
        { title: 'Senior Tax Exemptions', href: '/documents/senior-tax-exemptions.pdf' },
        { title: 'Property Tax Information', href: '/documents/property-tax-info.pdf' },
        { title: 'Tax Exemption Application Forms', href: '/documents/tax-exemption-forms.pdf' },
        { title: 'Polk County Tax Assessor Contact', href: 'https://www.polkpa.org/' },
        { title: 'Tax Calendar & Important Dates', href: '/documents/tax-calendar.pdf' }
      ]
    },
    {
      id: 'lodging-facilities',
      title: 'Lodging Facilities',
      icon: '🏨',
      description: 'Hotels and accommodations near Solivita',
      items: [
        { title: 'Lodging Facilities Near Solivita 6/25/2024', href: '/documents/lodging-facilities-near-solivita.pdf' },
        { title: 'Recommended Hotels in Kissimmee', href: '/documents/kissimmee-hotels.pdf' },
        { title: 'Orlando Area Accommodations', href: '/documents/orlando-accommodations.pdf' },
        { title: 'Vacation Rental Options', href: '/documents/vacation-rentals.pdf' },
        { title: 'Guest House Policies', href: '/documents/guest-house-policies.pdf' },
        { title: 'Extended Stay Options', href: '/documents/extended-stay.pdf' }
      ]
    },
    {
      id: 'utilities',
      title: 'Utilities',
      icon: '⚡',
      description: 'Utility companies and service information',
      items: [
        { title: 'Utilities Servicing Solivita 3/13/2025', href: '/documents/utilities-servicing-solivita.pdf' },
        { title: 'Electric Service Setup', href: '/documents/electric-setup.pdf' },
        { title: 'Water & Sewer Information', href: '/documents/water-sewer.pdf' },
        { title: 'Internet & Cable Providers', href: '/documents/internet-cable.pdf' },
        { title: 'Trash & Recycling Schedule', href: '/documents/trash-recycling.pdf' },
        { title: 'Utility Emergency Contacts', href: '/documents/utility-emergency.pdf' }
      ]
    },
    {
      id: 'cdd',
      title: 'CDD',
      icon: '🏛️',
      description: 'Community Development District information',
      items: [
        { title: 'CDD Overview & Structure', href: '/documents/cdd-overview.pdf' },
        { title: 'CDD Board Meeting Minutes', href: '/documents/cdd-minutes.pdf' },
        { title: 'CDD Assessment Information', href: '/documents/cdd-assessments.pdf' },
        { title: 'CDD Budget & Financial Reports', href: '/documents/cdd-budget.pdf' },
        { title: 'CDD Contact Information', href: '/documents/cdd-contacts.pdf' },
        { title: 'CDD Policies & Procedures', href: '/documents/cdd-policies.pdf' }
      ]
    },
    {
      id: 'polk-county',
      title: 'Polk County',
      icon: '🏢',
      description: 'County services and important contacts',
      items: [
        { title: 'Polk County Important Links & Telephone Numbers', href: 'https://www.apvcommunity.com/polk-county-information' },
        { title: 'County Services Directory', href: '/documents/county-services.pdf' },
        { title: 'Voter Registration Information', href: '/documents/voter-registration.pdf' },
        { title: 'Building Permits & Inspections', href: '/documents/building-permits.pdf' },
        { title: 'Emergency Services Contacts', href: '/documents/emergency-services.pdf' },
        { title: 'Public Transportation Options', href: '/documents/public-transportation.pdf' }
      ]
    }
  ];

  const handleLinkClick = (href: string, title: string) => {
    if (href.startsWith('http')) {
      // External link - open in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Internal PDF - in a real app, this would download or open the PDF
      console.log(`Opening document: ${title}`);
      // For demo purposes, show an alert
      alert(`This would open: ${title}\nDocument URL: ${href}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Useful Solivita Information</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Your comprehensive resource center for everything you need to know about living in Solivita. 
              Find important documents, contacts, and information organized by category.
            </p>
          </div>
        </div>
      </div>

      {/* Info Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Category Header */}
              <div className="bg-navy text-white p-6">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <p className="text-cream text-sm">{category.description}</p>
              </div>

              {/* Category Items */}
              <div className="p-6">
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(item.href, item.title)}
                      className="w-full flex items-center p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group text-left"
                    >
                      <div className="flex-shrink-0 mr-3">
                        <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          {item.href.startsWith('http') ? (
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                          ) : (
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                          )}
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Need Additional Information?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Can't find what you're looking for? Our team is here to help with any questions about Solivita living.
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
              <button
                onClick={() => window.location.href = '#contact'}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Resources */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Most Popular Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-navy mb-2">Buyer's Guide</h3>
                <p className="text-sm text-gray-600">Complete checklist for home buyers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold text-navy mb-2">Community Map</h3>
                <p className="text-sm text-gray-600">Navigate Solivita with ease</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-navy mb-2">Tax Exemptions</h3>
                <p className="text-sm text-gray-600">Save money with Florida tax benefits</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-navy mb-2">Utility Setup</h3>
                <p className="text-sm text-gray-600">Get connected quickly and easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulInfoPage;