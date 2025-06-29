import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home Search', href: '/home-searches' },
    { name: 'Useful Info.', href: '/useful-info' },
    { name: 'Sold', href: '/sold-homes' },
    { name: 'Floor Plans', href: '/floor-plans' },
    { name: 'Site Plans', href: '/site-plans' },
    { name: 'Videos', href: '/videos' },
    { name: 'Our Team', href: '/#team' },
    { name: 'Why We Moved Here', href: '/#testimonials' },
  ];

  const handleSocialClick = (platform: string) => {
    const socialUrls: { [key: string]: string } = {
      Facebook: 'https://www.facebook.com/borchinirealty',
      Twitter: 'https://twitter.com/borchinirealty',
      LinkedIn: 'https://www.linkedin.com/company/borchini-realty'
    };

    const url = socialUrls[platform];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sborchini@gmail.com';
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // If we're on the home page, scroll to the section
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Black Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          {/* Email on Left */}
          <button
            onClick={handleEmailClick}
            className="flex items-center hover:text-gray-300 transition-colors"
            aria-label="Email us at sborchini@gmail.com"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>sborchini@gmail.com</span>
          </button>

          {/* Social Media Icons on Right */}
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <button
              onClick={() => handleSocialClick('Facebook')}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.237-4.185 4.532v2.468z"/>
              </svg>
            </button>
            {/* X.com (formerly Twitter) */}
            <button
              onClick={() => handleSocialClick('Twitter')}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Visit our X.com page"
            >
              <img
                src="https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png"
                alt="X.com (formerly Twitter) logo"
                className="w-4 h-4 filter invert"
              />
            </button>
            {/* LinkedIn */}
            <button
              onClick={() => handleSocialClick('LinkedIn')}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Links to home */}
          <div className="flex items-center">
            <a href="/" aria-label="Borchini Realty - Home">
              <img
                src="https://ext.same-assets.com/666394337/2643467082.png"
                alt="Borchini Realty Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-navy hover:text-teal font-medium text-sm transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-navy p-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4" role="navigation" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 text-navy hover:text-teal font-medium text-sm transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;