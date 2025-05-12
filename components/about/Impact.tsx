"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {  X } from 'lucide-react';

const Impact = () => {
  const slides = [
    {
      title: 'OUR VISION',
      content: "The GoU-PRMS is more than a tool—it's a cornerstone of Uganda's commitment to refugee welfare and sustainable development. By fostering collaboration among government sectors, partners, and stakeholders.",
      image: '/home.jpeg',
      overlayText: 'FOR REFUGEE RESPONSE'
    },
    {
      title: 'OUR MISSION',
      content: 'To provide a comprehensive and integrated platform that streamlines refugee management processes while ensuring data-driven decision making and enhanced service delivery.',
      image: '/about.jpeg',
      overlayText: 'EMPOWERING CHANGE'
    },
    {
      title: 'OUR IMPACT',
      content: "Through innovative technology and collaborative approaches, we're transforming refugee management in Uganda, creating lasting positive change in the lives of displaced communities.",
      image: '/home.jpeg',
      overlayText: 'TRANSFORMING LIVES'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative bg-[#EDF0F2] h-screen w-full">
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
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">{slides[currentSlide].title}</h2>
          <p className="text-center mb-6">{slides[currentSlide].content}</p>
          <h1 className="text-4xl font-normal text-center mb-8">{slides[currentSlide].overlayText}</h1>
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
        <div className='ml-40 bg-destructive h-[70%] w-[70%]'>
          {/* Left side IMPACT text */}
          <div className="absolute left-36 top-1/2 -translate-y-1/2 pl-8">
            <div className="text-red-600 text-9xl font-medium transition-transform duration-500" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
              IMPACT
            </div>
          </div>

          {/* Main content container */}
          <div className="relative flex h-full">
            {/* Left side content */}
            <div className="absolute -bottom-16 left-0 bg-[#EDF0F2] z-10 w-1/3 p-8 flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold mb-6 transition-all duration-500 transform">{slides[currentSlide].title}</h2>
              <p className="text-gray-600 text-sm transition-all duration-500 transform">
                {slides[currentSlide].content}
              </p>
              <div className="mt-4 transition-all duration-500 flex flex-row justify-center items-center">
                <div className="text-red-600 text-6xl rotate-45 font-black">+</div>
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
              <div className="absolute bottom-20 right-40 text-white transition-all duration-500 transform">
                <h1 className="text-5xl font-normal">{slides[currentSlide].overlayText}</h1>
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
              <div className="absolute bg-[#EDF0F2] w-28 h-28 top-0 right-0 flex justify-center items-center text-center transition-all duration-500">
                <div className='space-y-1'>
                  <div className="text-4xl font-normal">{String(currentSlide + 1).padStart(2, '0')}</div>
                  <hr className='border-destructive border-1'/>
                  <div className="text-xs text-right">{String(slides.length).padStart(2, '0')}</div>
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