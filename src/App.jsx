import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import PricingSection from './components/PricingSection/PricingSection';
import BonusesSection from './components/BonusesSection/BonusesSection';
import FAQsSection from './components/FAQsSection/FAQsSection';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import NewsSection from './components/NewsSection/NewsSection';
import IndustrySection from './components/IndustrySection/IndustrySection';
import WorkShopSection from './components/WorkshopSection/WorkshopSection';
import CertificationSection from './components/CertificationSection/CertificationSection';
import Navbar from './components/Navbar/Navbar';
import MentorSection from './components/MentorSection/MentorSection';

const App = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar/> */}
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <BenefitsSection/>
      <NewsSection/>
      <IndustrySection/>
      <WorkShopSection/>
      <BonusesSection />
      <CertificationSection/>
      <MentorSection/>
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default App;
