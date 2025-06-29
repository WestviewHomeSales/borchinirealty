import React from 'react';

const OurTeamPage = () => {
  const teamMembers = [
    {
      id: 'charlie-susan-borchini',
      name: 'Charlie & Susan Borchini',
      title: 'Owners of Borchini Realty',
      phone: '407-791-1789',
      email: 'sborchini@gmail.com',
      image: 'https://ext.same-assets.com/666394337/2150349536.jpeg',
      bio: `Charlie and Susan moved to Florida in 2005. They were both were involved in real estate in the Washington, DC area as landlords of multiple condos. This led to their decision to become Florida Realtors. Charlie retired from the U.S. Army as a Colonel with 28 years of service. Susan was an Army Captain for 7 years. After leaving the Army, Susan became a psychotherapist for many years, at several locations around the world (following Charlie's assignments). They are the proud parents of three children and five grandchildren.

Charlie worked with Pioneer Realty in 2006 and joined Susan at Borchini Realty in 2007. Charlie obtained his Broker's license in 2015. In 2005, Susan started at Century 21 Premium Properties and moved to Pioneer Realty for a short time. After a year of practice, Susan obtained her broker's license and started Borchini Realty in 2007. We concentrate our efforts in Solivita. We live in the community and know it inside and out. We like to say, we work hard and play hard. We are involved in pickleball, softball and the Veteran's Club of Solivita.

Our philosophy is that we are no pressure Realtors. The client always decides what is best for him/her. If you would like to purchase a home we will be with you every step of the way. If you decide not to buy or sell your home we would still be happy assist you in any way. The choice is yours. If you are selling a home we have you covered from our extensive knowledge of what it takes to sell a home quickly. Helping people buying or selling their home is very fulfilling for us!`
    },
    {
      id: 'yamile-varrone',
      name: 'Yamile Varrone',
      title: 'Realtor',
      subtitle: 'Se habla Español',
      phone: '315-534-1966',
      email: 'ycVarrone@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1104170827.jpeg',
      bio: `Yamile was raised in Queens, NY and moved to upstate NY in 2003 where she built a reputation as a courteous, respected professional, working as an underwriter in the insurance business for over a decade. She is reliable, trustworthy and a great negotiator who is always aware of the need of her clients.

Her strong awareness for excellent customer service keeps her attuned at all times to specific client expectations.

She has two children and is a seven year resident of Solivita with her husband, Chris allowing her to have an in depth knowledge of Solivita and the surrounding areas. Her strong attention to detail and high standards in customer service and satisfaction always ensures every customer is treated the way she would want to be treated.

As a full time realtor, Yamile looks forward to using her passion for real state and customer service to helping you fulfill your real estate dreams.`
    },
    {
      id: 'sheila-choromanski',
      name: 'Sheila Choromanski',
      title: 'Broker Associate',
      phone: '203-631-8306',
      email: 'SheilaChor@gmail.com',
      image: 'https://ext.same-assets.com/666394337/3491598370.jpeg',
      bio: `Sheila Choromanski, a Connecticut native is a successful and proven Real Estate agent and Broker (in CT) with 38 years of experience. Having been involved in many clubs and serving on many Boards while living in Connecticut, gave her the ability to connect with buyers and sellers as well as connecting volunteers with philanthropic organizations and events.

She and her husband, Walt have three children. They first owned in Solivita in 2012 (as a place in the sun away from the snow for weeks at a time). Central Florida with its natural beauty, cultural activities, theme park attractions, and favorable tax climate made the decision to establish residency in 2018 an easy one. Solivita, with all its clubs and activities has enriched our lives, making friends with so many neighbors with such interesting backgrounds and talents from around the world. Living here and working here is just "another day in paradise". Selling in Solivita is a passion, not a job.

A graduate of Bay Path Jr. College, she then earned her Bachelor's degree from Central CT State University. Next followed her Graduate of Real Estate Institute designation followed by the coveted CRS designation. She is a Broker in CT and received the ABR designation as well as becoming a Certified Staging Specialist. The industry has changed dramatically over the past 38 years, but the ability to listen and understand clients' needs and lead them expertly during a purchase and sale are a constant and qualities Sheila prides herself in.

With a continued presence and license in Connecticut as well as Florida she can be your relocation connection as well as your Solivita neighbor and Real Estate Professional.`
    },
    {
      id: 'cherie-pontes',
      name: 'Cherie Pontes',
      title: 'Broker Associate',
      subtitle: 'Se habla Español',
      phone: '305-282-0527',
      email: 'cherie34759@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1342995360.jpeg',
      bio: `Cherie was born and raised in Miami, Florida after her parents immigrated from Brazil. Her husband is from Cuba and a retired police officer. She is fluent in Spanish & Portuguese. She is the proud mother to 3 children, grandmother and a lover of antiques, art & animals.

She's always enjoyed traveling & entertaining, however, since having moved to Solivita, she has enjoyed playing pickleball, softball, mahjongg, canasta & the list continues to grow….. As they say in Solivita, you can be as busy as you want to be and there is a club for almost every interest.

She owned her own Real Estate Appraisal Company for over 25 years. Cherie, a broker associate, also owned a Real Estate Brokerage in the Miami area before moving to Solivita. She has found Solivita appealing for its central location in Florida, near Disney and the golf courses (membership is NOT being mandatory in Solivita). With time, they have grown to appreciate the little things such as the extensive conservation areas, wildlife, walking, golf cart paths, amenities & all our new friends.

For Cherie living & working here in Solivita, has been a blessing!! She would love to show you around our community & answer any questions you may have.`
    },
    {
      id: 'dale-pautz',
      name: 'Dale Pautz',
      title: 'Realtor',
      phone: '863-669-7559',
      email: 'dgpautz@gmail.com',
      image: 'https://ext.same-assets.com/666394337/2170139032.jpeg',
      bio: `Dale was born and raised in Two Rivers, Wisconsin. He moved to Florida in 1987 to pursue a career in Law Enforcement. He retired in 2013.

He is married to Tammy, and they have two children and three grandchildren. They feel blessed to be living in a wonderful community like Solivita.

His knowledge of Solivita and the surrounding cities of Polk County is an invaluable asset. He believes in a strong commitment of honesty, integrity, moral, and ethical principles and values. He will work hard to help customers "achieve their dream".`
    },
    {
      id: 'edie-stauffer',
      name: 'Edie Stauffer',
      title: 'Broker Associate',
      phone: '215-264-0820',
      email: 'eStauffer712@gmail.com',
      image: 'https://ext.same-assets.com/666394337/1630399663.jpeg',
      bio: `Edie was born in New Jersey and moved to the Philadelphia area of Pennsylvania in 1992. She is married and has 3 children. She has been licensed in real estate since 2003, specializing in Residential and New Construction. Prior to moving to Florida, she was a Realtor at Long & Foster RE, Inc. in Blue Bell, PA where she was honored for her achievements in the Directors Club, Executives Club and Presidents Club with numerous service awards. She was a member of Long & Foster's Silver Team. Edie is accredited designations in Accredited Buyers Representative (ABR), Senior Housing Representative (SRES), and Certified Distressed Property Expert (CDPE). She acquired my Florida Brokers License in 2009 when her husband, Doug, and her first purchased their home in Solivita.

Edie became a full time resident in February of 2015. Since that time She has been involved with the many programs the community offers. She takes pride in serving her clients and assuring them a seamless transaction whether as a selling or listing agent. When not involved in real estate transactions Edie enjoys crafting, water volley ball, outdoor activities and reading. I look forward to exploring further programs and meeting all the wonderful people that live in Solivita.`
    },
    {
      id: 'valerie-williams',
      name: 'Valerie Williams',
      title: 'Realtor',
      phone: '407-910-2609',
      email: 'ValWilliamsRealtor@gmail.com',
      image: 'https://ext.same-assets.com/666394337/2754475470.jpeg',
      bio: `Valerie was born and raised on Long Island, NY, where she spent 28 years in the Insurance business as an injury claim negotiator settling complex casualty claims. The numerous accolades I received always highlighted my ability to listen, my genuine caring nature and my commitment to deliver the best result for my customers.

After raising 3 children and recently retiring, they "dream move" to Central Florida having spent many vacations here enjoying our love of fishing. We met Susan & Charlie in 2005 and with their help, patience and guidance, in 2008 we purchased a home in Crescent Lakes. We ran a 5 star rated vacation rental home business for 6 years. Our business was based on the philosophy that our customer was our business. We consistently impressed our guests with our prompt response time and keen attention to detail.

Having bought and sold several homes over the years, she decided to pursue a career in real estate so she could continue her dedication to helping people. She chose to specialize in Solivita, Bellalago & Waterview. All are Taylor Morrison properties. You can be assured she will listen to you and do my best to anticipate your needs. She has the skills necessary to negotiate the best possible outcome for you and will attend to all the details to see your dream of living in Central Florida come true!`
    },
    {
      id: 'heather-hayes',
      name: 'Heather Hayes',
      title: 'Realtor',
      phone: '703-282-7753',
      email: 'HeatherHayes222@gmail.com',
      image: 'https://ext.same-assets.com/666394337/3255383710.jpeg',
      bio: `Heather retired from her job as Chief of Staff to the Director of Planning and Resourcing for the Navy in 2018, moving with her husband to heir dream home in Solivita. She has a history of providing excellent customer service, attention to detail, and a strong desire to work with people.

She was born and raised in Northern Virginia, where she spent 30+ years working in various capacities for the Navy (including contracts and budgets). Since her move to Solivita, she has volunteered for a hospice organization, taken a turn as a neighborhood captain, and is treasurer of the Butterfly Club. She helped Charlie and Susan Borchini coordinate the sale of an incapacitated neighbor's property, and they told her she should think about being a realtor. So, she did! Her goal is to provide honest, thorough, and professional service to ensure each of her customers get the best possible home for them!`
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Meet the experienced professionals who make Borchini Realty the trusted choice for Solivita real estate.
            </p>
          </div>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">We LIVE here and SELL here!</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                That's important because we know the floor plans, market prices, amenities, the community and the latest information. Year after year we are consistently one of the top sellers and listers in Solivita.
              </p>
              <p>
                As our testimonials bear out we always go the extra mile for our clients. We assist you from start to finish and beyond. <strong>Established in 2007.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Image and Contact */}
                <div className="lg:col-span-1 p-8">
                  <div className="text-center">
                    <div className="relative h-64 w-64 mx-auto mb-6 overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
                    <p className="text-teal font-semibold mb-1">{member.title}</p>
                    {member.subtitle && (
                      <p className="text-sm text-gray-600 mb-4 italic">{member.subtitle}</p>
                    )}

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
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

                    {/* Action Buttons */}
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

                {/* Biography */}
                <div className="lg:col-span-2 p-8">
                  <div className="prose prose-lg max-w-none">
                    {member.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work with Our Team?</h2>
            <p className="text-xl text-cream mb-8">
              Contact us today to experience the Borchini Realty difference. We're here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+14077911789'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Call (407) 791-1789
              </button>
              <button
                onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                className="bg-cream text-navy px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Email Our Team
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                View Available Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-navy mb-2">18+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-2">500+</div>
                <div className="text-sm text-gray-600">Homes Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-2">100%</div>
                <div className="text-sm text-gray-600">Solivita Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-2">5★</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Why Choose Borchini Realty?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-navy mb-2">We Live Here</h3>
                <p className="text-sm text-gray-600">All our agents are Solivita residents who know the community inside and out</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-navy mb-2">Top Performers</h3>
                <p className="text-sm text-gray-600">Consistently ranked among the top sellers and listers in Solivita</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-navy mb-2">No Pressure</h3>
                <p className="text-sm text-gray-600">We believe the client always decides what's best for them</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">💯</div>
                <h3 className="font-semibold text-navy mb-2">Full Service</h3>
                <p className="text-sm text-gray-600">We assist you from start to finish and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;