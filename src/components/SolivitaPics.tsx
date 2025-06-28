import React, { useState } from 'react';

const SolivitaPics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Solivita',
      content: {
        title: 'Solivita',
        description: 'The word Solivita itself means sun and life. Solivita is an amazing 55+ Active Adult Community located in Kissimmee, FL. Solivita comprises approximately 4,300 acres. Just a short distance to all the major attractions in Orlando.',
        image: 'https://ext.same-assets.com/666394337/3470591081.jpeg'
      }
    },
    {
      title: '17 Pickleball Courts',
      content: {
        title: '17 Pickleball Courts',
        description: 'Well maintained pickleball courts with plenty of teams to join or play with your own small group. This is one of the most active sports in Solivita.',
        image: 'https://ext.same-assets.com/666394337/1200021725.jpeg'
      }
    },
    {
      title: 'Village Views',
      content: {
        title: 'Village Views',
        description: 'The Village is truly amazing. There are three restaurants on site, the Riviera Spa & Fitness Center, a Billiards Hall, Ceramics Gallery, Art Gallery, Ballroom and much more!',
        image: 'https://ext.same-assets.com/666394337/2117474404.jpeg'
      }
    },
    {
      title: 'Palms Amenity Center',
      content: {
        title: 'Palms Amenity Center',
        description: 'The Palms Amenity Center offers a huge pool with two spas, 4 Pickleball Courts, 2 Bocce Ball Courts, a spacious Yoga/Zumba/Exercise Room, etc AND a state of the art fitness center.',
        image: 'https://ext.same-assets.com/666394337/1770941935.jpeg'
      }
    },
    {
      title: 'Solivita Sports Courts',
      content: {
        title: 'Solivita Sports Courts',
        description: 'Enjoy the beautiful Village and all it has to offer. In the Main Village there are also clay Tennis Courts, Shuffleboard, Bocce Ball Courts, Softball Field, Veterans Park, Horseshoe Pits, Picnic Areas, Dog Park and Community Garden. What\'s not to like!',
        image: 'https://ext.same-assets.com/666394337/3849742372.jpeg'
      }
    }
  ];

  return (
    <section className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Solivita Quick Pics
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 m-1 rounded-lg font-medium text-sm transition-all ${
                  activeTab === index
                    ? 'bg-navy text-white shadow-md'
                    : 'text-navy hover:bg-gray-100'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-96 lg:h-auto">
                <img
                  src={tabs[activeTab].content.image}
                  alt={tabs[activeTab].content.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-navy mb-6">
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {tabs[activeTab].content.description}
                </p>

                <div className="mt-8">
                  <button className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots for mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  activeTab === index ? 'bg-navy' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolivitaPics;
