'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const Impact = () => {
  const slides = [
    {
      title: 'OUR VISION',
      content:
        "A single, trusted platform coordinating every partnership between Government and Non-State Actors — aligned to NDP IV and Vision 2040, across all government MDA's.",
      image: '/home.jpeg',
      overlayText: 'COORDINATED PARTNERSHIPS',
    },
    {
      title: 'OUR MISSION',
      content:
        'To streamline the full partnership lifecycle — applications, MoU processing, reporting and analytics — and to make partner contributions, including Off-Budget Financing, visible for planning and accountability.',
      image: '/about.jpeg',
      overlayText: 'EMPOWERING CHANGE',
    },
    {
      title: 'OUR IMPACT',
      content:
        'PCMS turns fragmented engagement into coordinated delivery — reducing duplication, cutting partner reporting fatigue, and surfacing the real contribution of Non-State Actors to national development outcomes.',
      image: '/home.jpeg',
      overlayText: 'TRANSFORMING DELIVERY',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative bg-surface-muted h-screen w-full">
      {/* Mobile Layout */}
      <div className="md:hidden h-full relative">
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt="Impact scene"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-8 text-white">
          <h2 className="font-display text-3xl font-normal mb-4 text-center">
            {slides[currentSlide].title}
          </h2>
          <p className="text-center mb-6 text-white/85 leading-relaxed">
            {slides[currentSlide].content}
          </p>
          <h1 className="font-display text-4xl font-normal text-center mb-8 text-gold">
            {slides[currentSlide].overlayText}
          </h1>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
            <button
              onClick={handlePrevSlide}
              className="bg-primary p-4 hover:bg-primary/80 transition-colors duration-300"
            >
              <span className="text-white">←</span>
            </button>
            <button
              onClick={handleNextSlide}
              className="bg-destructive p-4 hover:bg-red-700 transition-colors duration-300"
            >
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-center h-full">
        <div className="ml-40 bg-destructive h-[70%] w-[70%]">
          {/* Left side IMPACT text */}
          <div className="absolute left-12 lg:left-36 top-1/2 -translate-y-1/2 pl-8">
            <div
              className="text-red-600 text-9xl font-medium transition-transform duration-500"
              style={{
                writingMode: 'vertical-lr',
                transform: 'rotate(180deg)',
              }}
            >
              IMPACT
            </div>
          </div>

          {/* Main content container */}
          <div className="relative flex h-full">
            {/* Left side content */}
            <div className="absolute -bottom-16 left-0 bg-surface-muted z-10 w-1/3 p-8 flex flex-col items-start justify-center">
              <h2 className="font-display text-2xl font-normal mb-6 transition-all duration-500 transform text-foreground">
                {slides[currentSlide].title}
              </h2>
              <p className="text-foreground-muted text-sm transition-all duration-500 transform leading-relaxed">
                {slides[currentSlide].content}
              </p>
              <div className="mt-4 transition-all duration-500 flex flex-row justify-center items-center">
                <div className="text-red-600 text-6xl rotate-45 font-black">
                  +
                </div>
                <span className="ml-2 font-medium">MO</span>
              </div>
            </div>

            {/* Right side image section */}
            <div className="w-full relative overflow-hidden">
              <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                  src={slides[currentSlide].image}
                  alt="Impact scene"
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-20 right-24 lg:right-40 text-white transition-all duration-500 transform">
                <h1 className="text-4xl lg:text-5xl w-56 lg:w-full  font-normal">
                  {slides[currentSlide].overlayText}
                </h1>
              </div>

              {/* Navigation arrows */}
              <div className="absolute bottom-0 right-0 flex text-bold flex-col">
                <button
                  onClick={handleNextSlide}
                  className="bg-destructive p-4 hover:bg-red-700 transition-colors duration-300"
                >
                  <span className="text-white">→</span>
                </button>
                <button
                  onClick={handlePrevSlide}
                  className="bg-primary p-4 hover:bg-primary/80 transition-colors duration-300"
                >
                  <span className="text-white">←</span>
                </button>
              </div>

              {/* Page counter */}
              <div className="absolute bg-surface-muted text-foreground w-28 h-28 top-0 right-0 flex justify-center items-center text-center transition-all duration-500">
                <div className="space-y-1">
                  <div className="font-display text-4xl font-normal">
                    {String(currentSlide + 1).padStart(2, '0')}
                  </div>
                  <hr className="border-civic border-1" />
                  <div className="text-xs text-right text-foreground-muted">
                    {String(slides.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
