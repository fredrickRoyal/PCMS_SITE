"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ProductCard {
  icon: string;
  title: string;
  description: string;
}

const productData: ProductCard[] = [
  {
    icon: '↗',
    title: 'Partnerships Tracked',
    description: 'Monitors collaborations with NGOs, UN agencies, and other partners.'
  },
  {
    icon: '↗',
    title: 'Mapping Actors',
    description: 'Identifies and maps stakeholders involved in refugee programs.'
  },
  {
    icon: '↗',
    title: 'Irregularities and Intrusions Detected',
    description: 'Flags non-approved actors to ensure compliance.'
  },
  {
    icon: '↗',
    title: 'Data Analysis',
    description: 'Comprehensive analysis of refugee response data.'
  },
  {
    icon: '↗',
    title: 'Resource Tracking',
    description: 'Monitors and tracks resource allocation and utilization.'
  }
];

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">The system products include:</h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-500">
            "The GoU-RRMS delivers a range of products that enhance refugee response coordination and support government decision-making."
          </p>
        </div>

        <div className="mt-8 sm:mt-12 relative">
          <div ref={scrollRef} className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 scrollbar-hide relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
            <div className="flex gap-4 sm:gap-6 px-4">
              {productData.map((product, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[250px] sm:w-[300px] bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-black text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-base sm:text-xl mb-3 sm:mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            onClick={scrollLeft}
            role="button"
            aria-label="Scroll left"
            tabIndex={0}
            className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div
            onClick={scrollRight}
            role="button"
            aria-label="Scroll right"
            tabIndex={0}
            className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
