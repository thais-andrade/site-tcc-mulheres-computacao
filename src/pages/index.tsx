import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Product from '../components/Context';
import DividerSection from '../components/DividerSection';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Result';
import Features from '../components/Sobre';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 h-full`}>
      <div className={`relative bg-background h-full`}>
        <div className="max-w-7xl mx-auto lg:flex lg:items-center h-full">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:w-1/2 h-full`}
          >
            <Header />
            <MainHero />
          </div>
          <div className="absolute top-0 right-0 bottom-0 h-full">
            <MainHeroImage />
          </div>
        </div>
      </div>
      <div className='custom-canvas'>
      <Canvas />
      </div>
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <DividerSection />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
