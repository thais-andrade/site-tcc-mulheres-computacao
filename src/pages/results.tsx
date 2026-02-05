import React from "react";

import About from "../components/About";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import LazyShow from "../components/LazyShow";
import ResultsHeader from "../components/ResultsHeader";
import ResultHero from "../components/ResultHero";
import Graphics from "../components/Graphics";

const Results = () => {
  return (
    <div className={`bg-background grid gap-y-8 overflow-hidden`}>
      <div
        className={`relative bg-background bg-no-repeat bg-right -mb-40 background-custom`}
        style={{
          backgroundImage: `url("/assets/images/question.jpg")`,
          backgroundSize: "30%", // Adjust this value as needed to reduce the scale
          zIndex: 0,
        }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div
            className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <ResultsHeader />
            <ResultHero />
          </div>
        </div>
      </div>
      <div style={{
        zIndex: 99999,
      }}>
        <LazyShow>
          <>
            <Canvas />
            <Graphics />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
      </div>
      <Analytics />
    </div>
  );
};

export default Results;
