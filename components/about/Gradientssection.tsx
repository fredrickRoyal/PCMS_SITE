import React from 'react';
import Image from "next/image";

const Gradientssection = () => {
  return (
    <div className="bg-white min-w-full flex h-screen justify-center items-center px-4 sm:px-6">
    <div className="bg-gradient-to-t h-full sm:h-[90%] md:h-[80%] w-full sm:w-[90%] md:w-[80%] to-primary from-destructive p-4 sm:p-6 md:p-8 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="p-4 sm:p-6 rounded-xl w-full flex flex-col md:w-[500px] gap-6 md:gap-8">
         <div className='relative overflow-hidden rounded-xl bg-black w-full h-64 sm:h-80 md:h-96'>
           <Image
            src="/graph.png"
            alt="Refugee mother and child"
            fill
            className="object-cover grayscale"
            priority
          />
         </div>
          <button className="w-full mt-2 sm:mt-4 py-2 sm:py-3 border border-1 border-white hover:bg-primary text-white rounded-lg text-sm sm:text-base">System</button>
        </div>

        <div className="w-full md:w-1/2 flex items-center text-white">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What is the GoU-RRMS?</h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6">
            "The Government of Uganda Refugee Response Monitoring e-System (GoU-RRMS), developed by the Office of the Prime Minister (OPM) on behalf of the Government of Uganda, is a management system designed to enhance the coordination, monitoring and reporting of all aspects of refugee programs. Tailored to align with GoU line sectors—Health, Education, Energy, JLOS, Lands and Housing, Public Sector, Security, Works, Social Development, Trade Industry and Tourism, Water and Environment—the system ensures a holistic approach to refugee response."
          </p>
          
          <button className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-lg mb-6 sm:mb-8 text-sm sm:text-base">
            <span>Read more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">9.2</div>
              <div className="text-xs sm:text-sm opacity-80">Guest Ratings</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">150</div>
              <div className="text-xs sm:text-sm opacity-80">Total Groups</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10 Ha</div>
              <div className="text-xs sm:text-sm opacity-80">Area</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gradientssection;