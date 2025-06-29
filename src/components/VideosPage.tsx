import React, { useState } from 'react';

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: 'K4aPeaiDHys',
      title: 'Solivita Community Overview',
      description: 'Take a comprehensive tour of Solivita\'s amazing amenities and lifestyle offerings.',
      thumbnail: `https://img.youtube.com/vi/K4aPeaiDHys/maxresdefault.jpg`
    },
    {
      id: 'BrIGYubbbVM',
      title: 'Solivita Amenities Tour',
      description: 'Explore the world-class amenities that make Solivita the premier 55+ community in Florida.',
      thumbnail: `https://img.youtube.com/vi/BrIGYubbbVM/maxresdefault.jpg`
    },
    {
      id: '0Gd9OUFwhV4',
      title: 'Solivita Lifestyle Experience',
      description: 'Discover the active adult lifestyle and community spirit that defines Solivita living.',
      thumbnail: `https://img.youtube.com/vi/0Gd9OUFwhV4/maxresdefault.jpg`
    },
    {
      id: 'e-Nh749as9Y',
      title: 'Solivita Real Estate Showcase',
      description: 'See beautiful homes and properties available in Solivita\'s various neighborhoods.',
      thumbnail: `https://img.youtube.com/vi/e-Nh749as9Y/maxresdefault.jpg`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Videos</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Experience Solivita through our video collection. See the community, amenities, and lifestyle that make Solivita the perfect place to call home.
            </p>
          </div>
        </div>
      </div>

      {/* Main Video Player */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Featured Video */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videos[selectedVideo].id}?rel=0&modestbranding=1`}
                title={videos[selectedVideo].title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-navy mb-3">
                {videos[selectedVideo].title}
              </h2>
              <p className="text-gray-700 text-lg">
                {videos[selectedVideo].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">More Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(index)}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 text-left group ${
                  selectedVideo === index ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Currently Playing Indicator */}
                  {selectedVideo === index && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Now Playing
                    </div>
                  )}
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-navy mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Categories */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Video Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="font-semibold text-navy mb-2">Community Tours</h3>
                <p className="text-sm text-gray-600">Explore Solivita's neighborhoods and amenities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-navy mb-2">Home Showcases</h3>
                <p className="text-sm text-gray-600">See beautiful homes and floor plans</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🎾</div>
                <h3 className="font-semibold text-navy mb-2">Activities & Sports</h3>
                <p className="text-sm text-gray-600">Discover the active lifestyle opportunities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-semibold text-navy mb-2">Resident Stories</h3>
                <p className="text-sm text-gray-600">Hear from happy Solivita residents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Solivita in Person?</h2>
            <p className="text-xl text-cream mb-8">
              Schedule a personal tour and see why Solivita is the premier choice for active adult living in Florida.
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
                Email for Tour
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
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Explore More Solivita</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <button
                  onClick={() => window.location.href = '/#solivita-pics'}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                >
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Photo Gallery</h3>
                  <p className="text-gray-600">Browse stunning photos of Solivita</p>
                </button>
              </div>
              <div className="text-center">
                <button
                  onClick={() => window.location.href = '/floor-plans'}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                >
                  <div className="text-4xl mb-4">📐</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Floor Plans</h3>
                  <p className="text-gray-600">Explore home designs and layouts</p>
                </button>
              </div>
              <div className="text-center">
                <button
                  onClick={() => window.location.href = '/useful-info'}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                >
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Community Info</h3>
                  <p className="text-gray-600">Learn about Solivita living</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our YouTube channel for the latest Solivita videos and community updates.
            </p>
            <button
              onClick={() => window.open('https://www.youtube.com/channel/UCYourChannelID', '_blank')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe to Our Channel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;