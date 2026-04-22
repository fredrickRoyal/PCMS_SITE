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
    title: 'Online Applications & Profiling',
    description: 'Partners register, profile their organisation, and submit projects for review online.'
  },
  {
    icon: '↗',
    title: 'MoU Processing & Management',
    description: 'End-to-end MoU workflow — from application through Solicitor General clearance and signing.'
  },
  {
    icon: '↗',
    title: 'Periodic Partner Reporting',
    description: 'Structured reporting on project progress, outputs and contributions.'
  },
  {
    icon: '↗',
    title: 'Partnership Mapping & Alignment',
    description: 'Maps who is doing what, where — aligned to NDP IV, Vision 2040 and sector plans.'
  },
  {
    icon: '↗',
    title: 'Off-Budget Financing Tracking',
    description: 'Surfaces non-state resource flows that support national development outcomes.'
  },
  {
    icon: '↗',
    title: 'Strategic Analytics & Reporting',
    description: 'Role-specific dashboards and reports for the PS, departments and leadership.'
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
    <div className="bg-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-3">
            <span className="inline-block w-8 h-px bg-civic" />
            <span>Core Modules</span>
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground leading-tight">
            The platform&apos;s six capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground-muted leading-relaxed">
            PCMS delivers six core modules that cover the full partnership lifecycle — from application to reporting — and turn partner contributions into usable intelligence for Government.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 relative">
          <div ref={scrollRef} className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 scrollbar-hide relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
            <div className="flex gap-4 sm:gap-6 px-4">
              {productData.map((product) => (
                <motion.div
                  key={product.title}
                  className="flex-none w-[250px] sm:w-[300px] bg-surface border border-border p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-authority/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-authority text-authority-foreground w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-base sm:text-xl mb-4">
                    {product.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-normal text-foreground mb-2 leading-tight">{product.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll products left"
            className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll products right"
            className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
