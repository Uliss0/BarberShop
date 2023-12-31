import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-[#191B1A]'>
      <Header />
      <Hero />
      
      <About />
      <GallerySection />
     
      <Contact />
      <Footer />
      <Copyright />
      {/*<div className='h-[4000px]'></div>*/}
    </div>
  );
};

export default App;
