import React from 'react';
import HeroSection from '../components/organisms/HeroSection';
import ValuePropsSection from '../components/organisms/ValuePropsSection';
import AboutSection from '../components/organisms/AboutSection';

const LandingPage: React.FC = () => {
  return (
    <main> 
      <HeroSection />
      <ValuePropsSection />
      <AboutSection />
      {/* other sections go here */}
    </main>
  );
};

export default LandingPage;