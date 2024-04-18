import React from 'react';
import '../css/home.css';
import Header from './components/Header';
import Hero from './components/Welcome';
import About from './components/History';
import Services from './components/Activities';
import Portfolio from './components/Gallery';
import Testimonials from './components/Committee';
import Team from './components/Cmembers';
import Contact from './components/Contact';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
}

export default Home;
