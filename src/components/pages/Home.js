import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home({jobs}) {
  return (
    <>
      <HeroSection />
      <Cards jobs={jobs} />
      <Footer />
    </>
  );
}

export default Home;
