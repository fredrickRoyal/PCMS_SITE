import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">How the GoU-RRMS Works</h1>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Application Portal for Refugee Response Interventions</h2>
              
              <div className="relative h-48 sm:h-64 mb-3 sm:mb-4">
                <Image
                  src="/refugee-application.jpg"
                  alt="Refugee application process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Partners wishing to implement refugee response interventions in Uganda apply
                electronically through the GoU-RRMS. The system streamlines the approval process,
                ensuring alignment with government policies and priorities.
              </p>
              
              <button className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm sm:text-base">
                <span>Learn More</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Progress Tracking for Decision-Making</h2>
              
              <div className="relative h-48 sm:h-64 mb-3 sm:mb-4 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/progress-tracking.jpg"
                    alt="Progress tracking interface"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                The system tracks the implementation progress of refugee response activities by various
                actors, providing real-time data to OPM and stakeholders for informed decision-making.
              </p>
              
              <button className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm sm:text-base">
                <span>Learn More</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;