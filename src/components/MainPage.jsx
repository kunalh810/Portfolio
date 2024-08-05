// src/components/MainPage.js
import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Services from './services/Services';
import Qualification from './qualification/Qualification';
import Work from './work/Work';
import Testimonials from './testimonials/Testimonials';
import Contact from './contact/Contact';

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
    </>
  );
};

export default MainPage;
