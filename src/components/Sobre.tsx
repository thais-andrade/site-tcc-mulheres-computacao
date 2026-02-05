import React from 'react';

import config from '../config/index.json';

const Sobre = () => {
  const { sobre } = config;
  const { title, subtitle, description, description2} = sobre;
  return (
    <div className={`py-12 bg-background`} id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-5xl text-xl text-gray-600 lg:mx-auto">
            {description}
          </p>
          <p className="mt-4 max-w-5xl text-xl text-gray-600 lg:mx-auto">
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
