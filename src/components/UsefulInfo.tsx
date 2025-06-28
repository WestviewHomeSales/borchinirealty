import React from 'react';

const UsefulInfo = () => {
  const infoLinks = [
    { id: 'solivita-magazine', title: 'Solivita Reflections Magazine May 2025', href: '/documents/solivita-reflections-may-2025.pdf' },
    { id: 'contact-list', title: 'Solivita Contact List May 2025', href: '/documents/solivita-contact-list-may-2025.pdf' },
    { id: 'street-map', title: 'Solivita Street Map', href: '/documents/solivita-street-map.pdf' },
    { id: 'sellers-checklist', title: "Seller's Checklist 5/28/2025", href: '/documents/sellers-checklist-revised.pdf' },
    { id: 'buyers-checklist', title: "Buyer's Checklist 3/21/2025", href: '/documents/buyers-checklist-revised.pdf' },
    { id: 'mortgage-advice', title: 'Mortgage Advice', href: '/documents/mortgage-advice.pdf' },
    { id: 'photo-checklist', title: 'Home Preparation Checklist For Taking Pictures 11/16/2024', href: '/documents/home-preparation-checklist.pdf' },
    { id: 'polk-county', title: 'Polk County Important Links & Telephone Numbers', href: 'https://www.apvcommunity.com/polk-county-information' },
    { id: 'insurance-companies', title: "Homeowner's Insurance Companies in Florida", href: '/documents/florida-insurance-companies.pdf' },
    { id: 'lodging-facilities', title: 'Lodging Facilities Near Solivita 6/25/2024', href: '/documents/lodging-facilities-near-solivita.pdf' },
    { id: 'utilities', title: 'Utilities Servicing Solivita 3/13/2025', href: '/documents/utilities-servicing-solivita.pdf' },
    { id: 'solivita-pictures', title: 'Solivita in Pictures', href: 'https://www.solivitahoa.com/ImageGallery.php?lID=10021241' }
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
    <section className="bg-light-blue py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Useful Solivita Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href, link.title)}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group text-left w-full"
                aria-label={`Download or view: ${link.title}`}
              >
                <div className="flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-blue-accent group-hover:text-teal transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-navy font-medium group-hover:text-teal transition-colors">
                    {link.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {link.href.startsWith('http') ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    )}
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfo;
