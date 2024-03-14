// components/Hero.tsx
import React from 'react';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section relative flex items-center justify-center">
      <div className="hero-box p-10 rounded-md shadow-md max-w-screen-md flex items-center">
         <div className="text-left w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to GreenGrove</h1>
          <h4 className='text-3xl font-bold text-gray-800 mb-4'>
            Buy your dream plants
          </h4>
          <p className="text-xl text-gray-600 mb-8">Discover a world of beautiful plants for your home.</p>
        </div>
        <div className="w-1/2 pl-8">
          <img src="/heroimage.jpg" 
          alt="Plant Image" 
          className="w-full h-auto rounded" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
