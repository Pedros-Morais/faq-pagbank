import React, { useState, useEffect } from 'react';
import './App.css';
import Accordion from './components/accordion';
import faqData from './mocks/faqData.mock.json';
import BannerDesktop from "./assets/banners.png";
import BannerMobile from "./assets/mobile.png";
import Footer from './assets/Footer - Default.png';
import FooterMobile from './assets/footerMobile.png';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <img
        src={isMobile ? BannerMobile : BannerDesktop}
        alt="banner"
        className="banner"
      />
      <h1>Perguntas Frequentes</h1>
      {faqData.map((section, index) => (
        <div key={index} className="faq-section">
          <h2>{section.sectionTitle}</h2>
          {section.items.map((item, itemIndex) => (
            <Accordion key={itemIndex} title={item.accordionTitle} content={item.description} />
          ))}
        </div>
      ))}
      {isMobile ? (
        <img src={FooterMobile} alt="footer mobile" className="footer-mobile" />
      ) : (
        <img src={Footer} alt="footer" className="footer" />
      )}
    </div>
  );
};

export default App;
