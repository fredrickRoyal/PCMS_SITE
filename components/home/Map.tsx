import Image from "next/image";
import Link from "next/link";
import Flag from "../Flag";

export function Map() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-[600px] relative">
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src="/map-placeholder.jpg"
                    alt="Map of Uganda's refugee settlements"
                    fill
                    className="object-cover"
                  />
                </div>
                <div  className="absolute bottom-0 left-0">

            <Flag />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-wider">
              Explore Uganda's Refugee Settlements
            </h2>
            
            <button className="bg-red-600 text-white px-6 py-2 rounded mb-8">
              Learn More
            </button>
            
            <p className="text-sm text-gray-600 mb-8 md:mb-12">
              Nakivale (Isingiro), Oruchinga (Isingiro), Kyaka II (Kyegegwa),
              Rwamwanja (Kamwenge), Kyangwali (Kikuube), Kiryandongo
              (Kiryandongo), Adjumani (Adjumani), Palabek (Lamwo), Lobule (Koboko), Rhino Camp (Madi- Okollo),
              Bidi Bidi (Yumbe), Imvepi (Arua).
            </p>
            
            <div className="space-y-8 md:space-y-12 top-10 text-secondary">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm  font-bold">Secured by Default</span>
                  <span className="text-sm text-red-600">80%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-full w-4/5 bg-black rounded"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold">Global Footprint</span>
                  <span className="text-sm text-red-600">69%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-full w-[69%] bg-yellow-400 rounded"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">Partners in Progress</span>
                  <span className="text-sm text-red-600">75%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-full w-3/4 bg-red-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

