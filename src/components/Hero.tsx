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
          {/* Borchini Realty Logo with transparent background */}
          <div className="mb-8">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              alt="Borchini Realty Logo"
              className="h-32 w-auto mx-auto drop-shadow-2xl"
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='150' r='120' fill='none' stroke='%232563eb' stroke-width='8'/%3E%3Ccircle cx='160' cy='120' r='35' fill='%23fbbf24'/%3E%3Cpath d='M200 80 L220 140 L200 200 L180 140 Z' fill='%2316a34a'/%3E%3Cpath d='M160 140 L200 160 L240 140 L220 180 L180 180 Z' fill='%2316a34a'/%3E%3Cpath d='M200 200 L210 220 L200 240 L190 220 Z' fill='%23a3a3a3'/%3E%3Cpath d='M80 250 Q200 230 320 250 Q300 270 200 280 Q100 270 80 250' fill='%232563eb'/%3E%3Cpath d='M90 260 Q200 240 310 260 Q290 280 200 290 Q110 280 90 260' fill='%232563eb'/%3E%3Cpath d='M100 270 Q200 250 300 270 Q280 290 200 300 Q120 290 100 270' fill='%232563eb'/%3E%3Cpath d='M110 280 Q200 260 290 280 Q270 300 200 310 Q130 300 110 280' fill='%2316a34a'/%3E%3Cpath d='M120 290 Q200 270 280 290 Q260 310 200 320 Q140 310 120 290' fill='%2316a34a'/%3E%3Ctext x='200' y='360' text-anchor='middle' font-family='Arial, sans-serif' font-size='32' font-weight='bold' fill='%2316a34a'%3EBorchini Realty%3C/text%3E%3C/svg%3E") center/contain no-repeat`
              }}
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