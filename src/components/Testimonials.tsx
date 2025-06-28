import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'vickie-danny',
      text: "We were unable to be in Florida for the closing on our new home. Susan and Charles went above and beyond to assist us in every way possible - including to ensure that all required repairs were done. They are incredibly professional and savvy in all real estate matters and I would not hesitate to recommend Borchini Realty to anyone buying or selling a home.",
      author: "Vickie & Danny",
      rating: 5
    },
    {
      id: 'roger',
      text: "Excellent home buying experience provided by Susan. Susan was very responsive and professional in replying to our many questions about our new home and the SOLIVITA community. The photographs and video were excellent which made our decision to make an offer much easier. This along with her follow up and oversight on the home inspection was invaluable. The closing process was seamless without any surprises. I would HIGHLY recommend Susan and her team at BORCHINI REALTY!!",
      author: "Roger",
      rating: 5
    },
    {
      id: 'lauren',
      text: "You cannot ask for a better team! The Borchinis experience, dedication and excellent service made our transaction a pleasurable experience. We are grateful for their wonderful service. Highly recommend this team.",
      author: "Lauren",
      rating: 5
    },
    {
      id: 'jaqui',
      text: "Working with Borchini Realty made the nightmares of the home buying experience a dream. It was such a pleasure working with Susan because she walked me through the process step by step and maintained transparency throughout. She was always available to address any question or concerns. Borchini Realty made me like a family member rather than just another customer.",
      author: "Jaqui",
      rating: 5
    },
    {
      id: 'gerald',
      text: "Having moved more than ten times, Susan and Charles are the most professional realtors we have ever encountered. We moved to Solivita from Texas and Susan treated us as neighbors from our first meeting. Although inventory was at an all-time low she worked tirelessly to help us with our 'shortlist' of homes to see during our brief visit to Solivita.",
      author: "Gerald",
      rating: 5
    },
    {
      id: 'silvi',
      text: "Great realtor. They sold our property in one weekend! They made the sale process easy and simple with a checklist to assist us as well as showcasing our property online with photos, video and virtual tour. It was beautiful. We got a great price, closed on time, and check in my hand all before the end of month....truly an amazing accomplishment.",
      author: "Silvi",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={`star-${index}`}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-cream mb-12">
            Hear what our satisfied clients have to say about their experience with Borchini Realty
          </p>

          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8 relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-teal text-white p-4 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6" role="img" aria-label={`${testimonials[currentTestimonial].rating} out of 5 stars`}>
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <cite className="text-navy font-semibold text-lg not-italic">
              — {testimonials[currentTestimonial].author}
            </cite>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-cream' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial from ${testimonial.author}`}
                  role="tab"
                  aria-selected={index === currentTestimonial}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cream mb-2">100+</div>
              <div className="text-white">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cream mb-2">17</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cream mb-2">500+</div>
              <div className="text-white">Homes Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cream mb-2">5★</div>
              <div className="text-white">Average Rating</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              See All Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
