import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import UsefulInfo from './components/UsefulInfo';
import ServiceBoxes from './components/ServiceBoxes';
import StayAndPlay from './components/StayAndPlay';
import SolivitaPics from './components/SolivitaPics';
import TeamProfiles from './components/TeamProfiles';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MortgageCalculator from './components/MortgageCalculator';
import LiveChat from './components/LiveChat';
import SolivitaHomeSearches from './components/SolivitaHomeSearches';
import HomeSearches from './components/HomeSearches';
import UsefulInfoPage from './components/UsefulInfoPage';
import SoldHomesPage from './components/SoldHomesPage';
import FloorPlansPage from './components/FloorPlansPage';
import SitePlansPage from './components/SitePlansPage';
import VideosPage from './components/VideosPage';
import OurTeamPage from './components/OurTeamPage';
import WhySolivitaPage from './components/WhySolivitaPage';

// Home Page Component
const HomePage = () => (
  <>
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
    <section id="solivita-pics">
      <SolivitaPics />
    </section>
    <section id="team">
      <TeamProfiles />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-searches" element={<HomeSearches />} />
            <Route path="/solivita-home-searches" element={<SolivitaHomeSearches />} />
            <Route path="/useful-info" element={<UsefulInfoPage />} />
            <Route path="/sold-homes" element={<SoldHomesPage />} />
            <Route path="/floor-plans" element={<FloorPlansPage />} />
            <Route path="/site-plans" element={<SitePlansPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/why-solivita" element={<WhySolivitaPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Components */}
        <MortgageCalculator />
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;