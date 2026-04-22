'use client';

import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/logoplaceholder.png',
    alt: 'Partner 1 Logo',
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: '/logoplaceholder.png',
    alt: 'Partner 2 Logo',
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: '/logoplaceholder.png',
    alt: 'Partner 3 Logo',
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: '/logoplaceholder.png',
    alt: 'Partner 4 Logo',
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: '/logoplaceholder.png',
    alt: 'Partner 5 Logo',
  },
];

const Partners = () => {
  return (
    <div className="w-full py-6 sm:py-8 bg-[#EDF0F2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <button className="bg-destructive text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg whitespace-nowrap hover:bg-red-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
            Be A Partner
          </button>
          <div className="flex gap-6 sm:gap-8 w-full sm:w-auto overflow-x-auto touch-pan-x scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {partners.map((partner) => (
              <div key={partner.id} className="flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
