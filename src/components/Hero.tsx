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
          {/* Borchini Realty Logo - Using inline SVG for transparency */}
          <div className="mb-8">
            <svg 
              className="h-32 w-auto mx-auto drop-shadow-2xl" 
              viewBox="0 0 400 400" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Circular border */}
              <circle cx="200" cy="200" r="190" fill="none" stroke="#1e3a8a" strokeWidth="20"/>
              
              {/* Sun */}
              <circle cx="160" cy="120" r="50" fill="#fbbf24"/>
              
              {/* Palm tree trunk */}
              <path d="M200 180 Q205 220 200 280 Q195 320 200 360" fill="#92400e" stroke="#92400e" strokeWidth="8"/>
              
              {/* Palm fronds */}
              <path d="M200 180 Q150 150 120 140 Q140 160 180 170" fill="#16a34a"/>
              <path d="M200 180 Q250 150 280 140 Q260 160 220 170" fill="#16a34a"/>
              <path d="M200 180 Q180 130 170 100 Q190 120 200 160" fill="#16a34a"/>
              <path d="M200 180 Q220 130 230 100 Q210 120 200 160" fill="#16a34a"/>
              <path d="M200 180 Q160 200 130 220 Q150 200 190 190" fill="#16a34a"/>
              <path d="M200 180 Q240 200 270 220 Q250 200 210 190" fill="#16a34a"/>
              
              {/* Water waves - blue */}
              <path d="M50 300 Q100 280 150 300 Q200 320 250 300 Q300 280 350 300" fill="none" stroke="#1e40af" strokeWidth="8"/>
              <path d="M50 320 Q100 300 150 320 Q200 340 250 320 Q300 300 350 320" fill="none" stroke="#1e40af" strokeWidth="8"/>
              <path d="M50 340 Q100 320 150 340 Q200 360 250 340 Q300 320 350 340" fill="none" stroke="#1e40af" strokeWidth="8"/>
              
              {/* Green waves */}
              <path d="M50 310 Q100 290 150 310 Q200 330 250 310" fill="none" stroke="#16a34a" strokeWidth="6"/>
              <path d="M50 330 Q100 310 150 330 Q200 350 250 330" fill="none" stroke="#16a34a" strokeWidth="6"/>
            </svg>
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