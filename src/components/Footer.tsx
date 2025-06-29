import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Solivita Home Searches', href: '#properties' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Floor Plans', href: '#solivita-pics' },
    { name: 'Our Listings', href: '#properties' },
    { name: 'Our Team', href: '#team' },
    { name: 'Photos & Videos', href: '#solivita-pics' },
    { name: 'Site Map', href: '/site-map' },
    { name: 'Site Plans', href: '#solivita-pics' },
    { name: 'Sold Homes', href: '#properties' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Useful Information', href: '#useful-info' },
    { name: 'Videos', href: '#solivita-pics' },
    { name: 'Why We Moved Here', href: '#testimonials' }
  ];

  const handleSocialClick = (platform: string) => {
    const socialUrls: { [key: string]: string } = {
      Facebook: 'https://www.facebook.com/borchinirealty',
      Twitter: 'https://twitter.com/borchinirealty', // Keeping twitter.com as it redirects to X
      LinkedIn: 'https://www.linkedin.com/company/borchini-realty'
    };

    const url = socialUrls[platform];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (href: string, name: string) => {
    if (href.startsWith('http') || href.startsWith('/')) {
      if (href.startsWith('/')) {
        // Internal page - would navigate in a real app
        console.log(`Navigate to: ${name} (${href})`);
        alert(`This would navigate to: ${name}\nURL: ${href}`);
      } else {
        // External link
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
    // Anchor links (#) will be handled automatically by the browser
  };

  return (
    <footer className="bg-navy text-white">
      {/* Professional Memberships */}
      <div className="bg-light-blue py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-navy text-center mb-6">
            WE ARE Proud Members of
          </h3>
          <div className="flex justify-center items-center space-x-8">
            <img
              src="https://ext.same-assets.com/666394337/3306199040.jpeg"
              alt="Professional Real Estate Association Member"
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://ext.same-assets.com/666394337/1076429729.jpeg"
              alt="MLS (Multiple Listing Service) Association Member"
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold text-cream mb-4">COMPANY INFO</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Borchini Realty was established in 2007 and proudly serves Solivita's 55+ Community
                located in Poinciana, FL. All of our agents LIVE HERE and SELL HERE. Borchini Realty
                is the most trusted name in Solivita real estate.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = 'tel:+14077911789'}
                  className="flex items-center text-left hover:text-cream transition-colors"
                  aria-label="Call us at 407-791-1789"
                >
                  <svg className="w-5 h-5 mr-3 text-cream" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>407-791-1789</span>
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                  className="flex items-center text-left hover:text-cream transition-colors"
                  aria-label="Email us at sborchini@gmail.com"
                >
                  <svg className="w-5 h-5 mr-3 text-cream" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>sborchini@gmail.com</span>
                </button>
              </div>
            </div>

            {/* Quick Links - Column 1 */}
            <div>
              <h4 className="text-xl font-bold text-cream mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="text-gray-300 hover:text-cream transition-colors text-sm">
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-300 hover:text-cream transition-colors text-sm text-left"
                        aria-label={`Navigate to ${link.name}`}
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links - Column 2 */}
            <div>
              <h4 className="text-xl font-bold text-cream mb-4 opacity-0">LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.slice(8).map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="text-gray-300 hover:text-cream transition-colors text-sm">
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-300 hover:text-cream transition-colors text-sm text-left"
                        aria-label={`Navigate to ${link.name}`}
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-xl font-bold text-cream mb-4">Get in touch</h4>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Susan Borchini</p>
                  <button
                    onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                    className="text-sm text-gray-300 hover:text-cream transition-colors"
                    aria-label="Email Susan Borchini"
                  >
                    sborchini@gmail.com
                  </button>
                  <br />
                  <button
                    onClick={() => window.location.href = 'tel:+14077911789'}
                    className="text-sm text-gray-300 hover:text-cream transition-colors"
                    aria-label="Call Susan Borchini"
                  >
                    407-791-1789
                  </button>
                </div>

                <div>
                  <p className="font-semibold">Charlie Borchini</p>
                  <button
                    onClick={() => window.location.href = 'mailto:Charles.Borchini@gmail.com'}
                    className="text-sm text-gray-300 hover:text-cream transition-colors"
                    aria-label="Email Charlie Borchini"
                  >
                    Charles.Borchini@gmail.com
                  </button>
                  <br />
                  <button
                    onClick={() => window.location.href = 'tel:+14075527375'}
                    className="text-sm text-gray-300 hover:text-cream transition-colors"
                    aria-label="Call Charlie Borchini"
                  >
                    407-552-7375
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-sm text-cream mb-3">Follow Us:</p>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <button
                    onClick={() => handleSocialClick('Facebook')}
                    className="text-gray-300 hover:text-cream transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.237-4.185 4.532v2.468z"/>
                    </svg>
                  </button>
                  {/* X.com (formerly Twitter) - Using Image */}
                  <button
                    onClick={() => handleSocialClick('Twitter')}
                    className="text-gray-300 hover:opacity-80 transition-opacity"
                    aria-label="Visit our X.com page"
                  >
                    <img
                      src="https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png"
                      alt="X.com (formerly Twitter) logo"
                      className="w-6 h-6 filter invert" // Invert filter to make black logo white on dark background
                    />
                  </button>
                  {/* LinkedIn */}
                  <button
                    onClick={() => handleSocialClick('LinkedIn')}
                    className="text-gray-300 hover:text-cream transition-colors"
                    aria-label="Visit our LinkedIn page"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  {/* Removed YouTube and Instagram buttons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright - 2025 Borchini Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;