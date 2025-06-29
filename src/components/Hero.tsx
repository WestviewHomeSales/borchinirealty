import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://ext.same-assets.com/666394337/3470591081.jpeg',
      alt: 'Solivita Village Aerial View'
    },
    {
      image: 'https://ext.same-assets.com/666394337/3472004626.jpeg',
      alt: 'Solivita Community'
    },
    {
      image: 'https://ext.same-assets.com/666394337/1528844828.jpeg',
      alt: 'Solivita Homes'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          {/* Borchini Realty Logo */}
          <div className="mb-8">
            <img
              src="/borchini-logo.png"
              alt="Borchini Realty Logo"
              className="h-32 w-auto mx-auto drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            We LIVE here!<br />We SELL here!
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Discover your dream home in Solivita's premier 55+ community
          </p>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;