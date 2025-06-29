import React from 'react';

const TeamProfiles = () => {
  const teamMembers = [
    {
      id: 'susan-borchini',
      name: 'Susan Borchini',
      title: 'Broker/Owner',
      phone: '407-791-1789',
      email: 'sborchini@gmail.com',
      image: 'https://ext.same-assets.com/666394337/2150349536.jpeg'
    },
    {
      id: 'charlie-borchini',
      name: 'Charlie Borchini',
      title: 'Broker Associate',
      phone: '407-552-7375',
      email: 'charles.borchini@gmail.com',
      image: 'https://ext.same-assets.com/666394337/116213017.jpeg'
    },
    {
      id: 'yamile-varrone',
      name: 'Yamile Varrone',
      title: 'Realtor',
      subtitle: 'Se habla Español',
      phone: '315-534-1966',
      email: 'ycVarrone@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1104170827.jpeg'
    },
    {
      id: 'edie-stauffer',
      name: 'Edie Stauffer',
      title: 'Broker Associate',
      phone: '215-264-0820',
      email: 'eStauffer712@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1630399663.jpeg'
    },
    {
      id: 'valerie-williams',
      name: 'Valerie Williams',
      title: 'Realtor',
      phone: '407-910-2609',
      email: 'ValWilliamsRealtor@gmail.com',
      image: 'https://ext.same-assets.com/666394337/2754475470.jpeg'
    },
    {
      id: 'cherie-pontes',
      name: 'Cherie Pontes',
      title: 'Broker Associate',
      subtitle: 'Se habla Español',
      phone: '305-282-0527',
      email: 'cherie34759@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1342995360.jpeg'
    },
    {
      id: 'dale-pautz',
      name: 'Dale Pautz',
      title: 'Realtor',
      phone: '863-669-7559',
      email: 'dgpautz@gmail.com',
      image: '/dale_pautz.jpg'
    },
    {
      id: 'sheila-choromanski',
      name: 'Sheila Choromanski',
      title: 'Broker Associate',
      phone: '203-631-8306',
      email: 'SheilaChor@gmail.com',
      image: '/sheila_choromanski.jpg'
    },
    {
      id: 'heather-hayes',
      name: 'Heather Hayes',
      title: 'Realtor',
      phone: '703-282-7753',
      email: 'HeatherHayes222@gmail.com',
      image: 'https://ext.same-assets.com/666394337/3255383710.jpeg'
    }
  ];

  const handleContact = (type: 'phone' | 'email', value: string) => {
    if (type === 'phone') {
      window.location.href = `tel:${value.replace(/[^0-9+]/g, '')}`;
    } else {
      window.location.href = `mailto:${value}`;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Meet the Agents</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced team of real estate professionals live and work in Solivita.
            We know the community, the market, and we're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Profile Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-teal font-semibold mb-1">{member.title}</p>
                {member.subtitle && (
                  <p className="text-sm text-gray-600 mb-3 italic">{member.subtitle}</p>
                )}

                <div className="space-y-2 mb-6">
                  <button
                    onClick={() => handleContact('phone', member.phone)}
                    className="flex items-center justify-center text-gray-600 hover:text-teal transition-colors w-full"
                    aria-label={`Call ${member.name} at ${member.phone}`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-sm">{member.phone}</span>
                  </button>
                  <button
                    onClick={() => handleContact('email', member.email)}
                    className="flex items-center justify-center text-gray-600 hover:text-teal transition-colors w-full"
                    aria-label={`Email ${member.name} at ${member.email}`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-sm break-all">{member.email}</span>
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleContact('phone', member.phone)}
                    className="flex-1 bg-navy text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
                    aria-label={`Call ${member.name}`}
                  >
                    Call
                  </button>
                  <button
                    onClick={() => handleContact('email', member.email)}
                    className="flex-1 bg-teal text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
                    aria-label={`Email ${member.name}`}
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-cream p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our team is here to help you buy or sell your home in Solivita.
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '#contact'}
                className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                aria-label="Navigate to contact section"
              >
                Schedule a Consultation
              </button>
              <button
                onClick={() => window.location.href = '#properties'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                aria-label="Navigate to properties section"
              >
                Browse Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;