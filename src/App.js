import React from 'react';
import SkillsComponent from './components/SkillsComponent';
import ProjectsComponent from './components/ProjectsComponent';
import PortfolioHeaderComponent from './components/Header';
import ContactComponent from './components/Contact';
import IntroduceComponent from './components/Introduce';
import Footer from './components/Footer';

const Portfolio = () => {

  return (
    <div>
      <PortfolioHeaderComponent />
      <IntroduceComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Portfolio;