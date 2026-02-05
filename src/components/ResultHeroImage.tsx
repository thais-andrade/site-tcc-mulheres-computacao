import React from 'react';

import config from '../config/index.json';
import Image from 'next/image';

const ResultHeroImage = () => {
  const { resultHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
        className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full mt-20"
        width={1920}
        height={1080}
        src={resultHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default ResultHeroImage;
