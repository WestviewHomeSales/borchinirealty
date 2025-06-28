import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UsefulInfo from './components/UsefulInfo';
import ServiceBoxes from './components/ServiceBoxes';
import StayAndPlay from './components/StayAndPlay';
import SolivitaPics from './components/SolivitaPics';
// import TeamProfiles from './components/TeamProfiles'; // Removed
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="useful-info">
          <UsefulInfo />
        </section>
        <section id="services">
          <ServiceBoxes />
        </section>
        <section id="contact">
          <StayAndPlay />
        </section>
        {/* Removed the Property Listings section */}
        {/* <section id="properties">
          <PropertyListings />
        </section> */}
        <section id="solivita-pics">
          <SolivitaPics />
        </section>
        {/* Removed the Team Profiles section */}
        {/* <section id="team">
          <TeamProfiles />
        </section> */}
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;