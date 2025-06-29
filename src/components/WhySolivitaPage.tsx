import React from 'react';

const WhySolivitaPage = () => {
  const testimonials = [
    {
      id: 'lb',
      text: "We were looking for a new way of life. Got tired of the same old routine up North and didn't have much contact with retired folks. We came to Solivita after visiting many Florida over 55 communities and fell in love with it. It's the best move we ever made.",
      author: "L.B."
    },
    {
      id: 'rt',
      text: "We lived in another Avatar community and really liked it but it lacked all the activities that Solivita has to offer. So we sold our home and moved to Solivita. We haven't been disappointed. The community offers so many sports and two golf courses not to mention theater, fine arts, book clubs, bridge, etc. The main reason we love Solivita is the people who live here. There is a terrific sense of fellowship within the community.",
      author: "R.T."
    },
    {
      id: 'rp',
      text: "We lived in another Avatar community and really liked it but it lacked all the activities that Solivita has to offer. So we sold our home and moved to Solivita. We haven't been disappointed. The community offers so many sports and two golf courses not to mention theater, fine arts, book clubs, bridge, etc. The main reason we love Solivita is the people who live here. There is a terrific sense of fellowship within the community.",
      author: "R.P."
    },
    {
      id: 'dm',
      text: "Our friends moved to Solivita from New Jersey. Three years later and a couple of visits we decided to throw away our snow shovels and move here. Great friends and lots to do. Never a dull day.",
      author: "D.M."
    },
    {
      id: 'km',
      text: "We wanted an active lifestyle and looked at the Villages first. We toured Solivita and fell in love with it. The people here are so friendly and it's not far from the airport. Home lots are bigger than the Villages and the houses are more reasonable in price.",
      author: "K.M."
    },
    {
      id: 'tl1',
      text: "We lived in the Midwest and came to Solivita three times before buying here. We weren't ready to retire but decided to make the move. We wanted to be closer to our grandchildren and leave the cold Winters behind. We love the community and have gotten involved with many activities. No regrets here.",
      author: "T.L."
    },
    {
      id: 'kh1',
      text: "I was transferred from my job in Illinois. We are in our mid 50's and saw several other communities throughout Orlando and Kissimmee. We decided on Solivita because it offered so much to do. When we moved in the neighbors brought us goodies to eat and within a week they invited me to lunch. We regularly have block parties and are having the time of our life here.",
      author: "K.H."
    },
    {
      id: 'ac',
      text: "I came down from NYC four years ago to escape the rat race and the cold winters. I've gotten involved with pickle ball and softball. I'm learning how to play bridge and belong to a book club. Solivita has fulfilled all my expectations. I go back to NYC to see the kids but can't wait to get back to my activities here.",
      author: "A.C."
    },
    {
      id: 'dw',
      text: "We came from Richmond, VA to visit a high school classmate who had moved to Solivita. Within 3 months we sold our home in VA and bought a house here. It was an impulse buy but we are terrifically happy here. My husband enjoys the Veterans Club and I play softball. Even though we are in our mid 50's this place makes us feel like teenagers again.",
      author: "D.W."
    },
    {
      id: 'tl2',
      text: "We lived in the Midwest and came to Solivita three times before buying here. We weren't ready to retire but decided to make the move. We wanted to be closer to our grandchildren and leave the cold Winters behind. We love the community and have gotten involved with many activities. No regrets here.",
      author: "T.L."
    },
    {
      id: 'kh2',
      text: "I was transferred from my job in Illinois. We are in our mid 50's and saw several other communities throughout Orlando and Kissimmee. We decided on Solivita because it offered so much to do. When we moved in the neighbors brought us goodies to eat and within a week they invited me to lunch. We regularly have block parties and are having the time of our life here.",
      author: "K.H."
    },
    {
      id: 'jr',
      text: "I bought a house sight unseen from Susan. My friends had been here a couple of times and highly recommended it. I moved here in January and have fallen in love with the community. Everyone is so friendly and you can't beat the \"Winter\" weather. Solivita has lived up to my expectations and more.",
      author: "J.R."
    },
    {
      id: 'ry',
      text: "We came and visited Solivita last year and really liked it. We decided to rent for one month this year and loved the activities, weather and people. It's freezing in the Mid West in the Winter. We will be snowbirding here when it's cold there.",
      author: "R.Y."
    }
  ];

  const reasons = [
    {
      icon: '🌞',
      title: 'Year-Round Sunshine',
      description: 'Enjoy Florida\'s beautiful weather and escape harsh winters forever'
    },
    {
      icon: '🏌️',
      title: 'Two Championship Golf Courses',
      description: 'Play on professionally designed courses right in your backyard'
    },
    {
      icon: '🏓',
      title: '17 Pickleball Courts',
      description: 'Join the fastest-growing sport with top-notch facilities and leagues'
    },
    {
      icon: '🏊',
      title: 'Resort-Style Amenities',
      description: 'Multiple pools, spas, fitness centers, and recreational facilities'
    },
    {
      icon: '🎭',
      title: 'Rich Cultural Life',
      description: 'Theater, fine arts, book clubs, and countless social activities'
    },
    {
      icon: '👥',
      title: 'Amazing Community',
      description: 'Make lifelong friends with neighbors from diverse backgrounds'
    },
    {
      icon: '🏡',
      title: 'Beautiful Homes',
      description: 'Quality construction with various floor plans and price points'
    },
    {
      icon: '📍',
      title: 'Perfect Location',
      description: 'Close to Orlando attractions, airports, and medical facilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Solivita</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Discover why thousands of active adults have chosen Solivita as their home. 
              Hear directly from our residents about what makes this community so special.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Solivita Section */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">What Makes Solivita Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-navy mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">Hear From Our Residents</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Real stories from real people who have made Solivita their home. 
            These testimonials showcase the genuine experiences of our community members.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-teal text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-center">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <cite className="text-navy font-semibold text-lg not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Solivita by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-navy mb-2">4,300</div>
                <div className="text-sm text-gray-600">Acres of Community</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">3,000+</div>
                <div className="text-sm text-gray-600">Happy Residents</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">100+</div>
                <div className="text-sm text-gray-600">Clubs & Activities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">55+</div>
                <div className="text-sm text-gray-600">Active Adult Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle Highlights */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">The Solivita Lifestyle</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Active Living */}
              <div className="text-center">
                <div className="bg-cream p-8 rounded-lg mb-6">
                  <div className="text-5xl mb-4">🏃‍♀️</div>
                  <h3 className="text-xl font-bold text-navy mb-4">Stay Active</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• 17 Pickleball Courts</li>
                    <li>• 2 Championship Golf Courses</li>
                    <li>• Multiple Fitness Centers</li>
                    <li>• Tennis & Bocce Ball</li>
                    <li>• Walking & Biking Trails</li>
                    <li>• Swimming Pools & Spas</li>
                  </ul>
                </div>
              </div>

              {/* Social Life */}
              <div className="text-center">
                <div className="bg-cream p-8 rounded-lg mb-6">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-navy mb-4">Stay Social</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• 100+ Clubs & Organizations</li>
                    <li>• Theater & Fine Arts</li>
                    <li>• Book Clubs & Bridge</li>
                    <li>• Veterans Club</li>
                    <li>• Volunteer Opportunities</li>
                    <li>• Community Events</li>
                  </ul>
                </div>
              </div>

              {/* Convenient Living */}
              <div className="text-center">
                <div className="bg-cream p-8 rounded-lg mb-6">
                  <div className="text-5xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-navy mb-4">Live Comfortably</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• Low-Maintenance Living</li>
                    <li>• 24/7 Security</li>
                    <li>• On-Site Restaurants</li>
                    <li>• Medical Facilities Nearby</li>
                    <li>• Shopping & Entertainment</li>
                    <li>• Airport Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Solivita Your Home?</h2>
            <p className="text-xl text-cream mb-8">
              Join thousands of residents who have discovered the perfect blend of active living, 
              community spirit, and Florida sunshine. Your new life awaits!
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
                Email Us Today
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

      {/* Additional Resources */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Learn More About Solivita</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <button
                onClick={() => window.location.href = '/videos'}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold text-navy mb-2">Watch Videos</h3>
                <p className="text-gray-600">See Solivita in action with our video tours</p>
              </button>
              <button
                onClick={() => window.location.href = '/#solivita-pics'}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-navy mb-2">Photo Gallery</h3>
                <p className="text-gray-600">Browse beautiful photos of our community</p>
              </button>
              <button
                onClick={() => window.location.href = '/useful-info'}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-navy mb-2">Community Info</h3>
                <p className="text-gray-600">Get all the details about Solivita living</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySolivitaPage;