import React from 'react';
import { FaHome, FaChartBar, FaRulerCombined } from 'react-icons/fa'; // Assuming these icons are used

const ServiceBoxes = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl text-navy mb-4" />,
      title: 'Easy 1 Click Solivita Home Search',
      description: 'Solivita Home Searches Made Easy. Homes currently on the market for sale',
      linkText: 'Learn More',
      linkUrl: '#' // Replace with actual link
    },
    {
      icon: <FaChartBar className="text-4xl text-navy mb-4" />,
      title: 'Homes Sold in Solivita',
      description: 'Comprehensive list of all homes sold in Solivita since 2011',
      linkText: 'Learn More',
      linkUrl: '#' // Replace with actual link
    },
    {
      icon: <FaRulerCombined className="text-4xl text-navy mb-4" />,
      title: 'Solivita Floor Plans',
      description: 'Looking for a floor plan? We have them all! New floor plans as well as the older ones',
      linkText: 'Learn More',
      linkUrl: '#' // Replace with actual link
    },
    // Removed the fourth box data entry
    // {
    //   icon: <FaUsers className="text-4xl text-navy mb-4" />, // Assuming FaUsers for the icon
    //   title: 'Meet the Agents',
    //   description: 'Learn more about the experienced team ready to help you find your dream home.',
    //   linkText: 'Learn More',
    //   linkUrl: '#' // Replace with actual link
    // }
  ];

  return (
    <section className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-start"
              >
                {service.icon}
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.linkUrl}
                  className="text-blue-accent font-semibold flex items-center hover:underline"
                >
                  {service.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
