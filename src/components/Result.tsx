import React from 'react';

import Link from 'next/link';

import config from '../config/index.json';

const Result = () => {
  const { result } = config;
  const { title, description, description2, primaryAction } = result;
  return (
    <div className={`py-12 bg-background`} id="result">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          >
            {title}
          </h1>
          <p className="mt-4 max-w-5xl text-xl text-gray-600 lg:mx-auto">
            {description}
          </p>
          <p className="mt-4 max-w-5xl text-xl text-gray-600 lg:mx-auto">
            {description2}
          </p>
        </div>

        <div className="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <Link href="/results" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
                {primaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
