import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from '../assets/brands/amazon.png';
import brand2 from '../assets/brands/amazon_vector.png';
import brand3 from '../assets/brands/casio.png';
import brand4 from '../assets/brands/moonstar.png';
import brand5 from '../assets/brands/randstad.png';
import brand6 from '../assets/brands/start-people 1.png';
import brand7 from '../assets/brands/start.png';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

function BrandsMarquee() {
  return (
    <div className="py-8 max-w-[1500px] mx-auto ">
        <h1 className='text-4xl text-center mb-10 font-extrabold mt-10'>We've helped thousands of sales teams</h1>
      <Marquee speed={50} gradient={false}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center px-10"
          >
            <img
              src={brand}
              alt={`brand-${index}`}
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default BrandsMarquee;
