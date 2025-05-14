'use client';

import { useState } from 'react';
import Image from 'next/image';
import Flag from '../Flag';
import { Cross, FolderClosed, X } from 'lucide-react';

interface CardData {
  title: string;
  image?: string;
  description: string;
  learnMoreLink: string;
}

const cards: CardData[] = [
  {
    title: 'GoU-RRMS Tracks $10M Investment',
    image: '/blog1.jpg',
    description: 'The GoU-RRMS has successfully tracked a $10 million investment from development partners to enhance water and sanitation services in...',
    learnMoreLink: '/investment'
  },
  {
    title: 'New Partnership Boosts Education',
    image: '/blog2.jpeg',
    description: 'The Office of the Prime Minister (OPM), through the GoU-RRMS, has welcomed a new partnership with an international NGO to...',
    learnMoreLink: '/partnership'
  },
  {
    title: 'CRRF Milestone: 500 Refugees Repatriated Voluntarily',
    description: 'A significant milestone has been achieved in the voluntary repatriation program...',
    learnMoreLink: '/milestone',
    image: 'blog3.jpeg'
  }
];

export default function Passion() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section className="bg-[#EDF0F2] py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-secondary font-normal">Where Passion for Speed Comes</h2>
          <div className=''>

          <Flag />
          </div>
        <p className="text-secondary/50 text-xs max-w-full md:max-w-96 mb-6 md:mb-8">
          At Apex, speed isn't just a number—it's a way of life.
          Designed for those who crave the rush of acceleration
          and the thrill of precision
        </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => setSelectedCard(card)}
            >
                  <h3 className="text-lg font-semibold mb-2 text-secondary transition-colors">
                  {card.title}
                </h3>
              <div className="relative rounded-xl overflow-hidden h-48">
                <Image
                  src={card.image || '/placeholder-image.jpg'}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="text-xs">
              
                <p className="text-secondary/50  line-clamp-3">{card.description}</p>
                <p className="text-blue-600 mt-4 font-medium">Learn More</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div className="fixed text-secondary inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
               onClick={() => setSelectedCard(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative"
                 onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-2xl text-secondary/50 hover:text-secondary transition-colors"
                onClick={() => setSelectedCard(null)}
              >
              <X size={25} className='hover:rotate-90 duration-300' />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
              <p className="text-gray-600 mb-6">{selectedCard.description}</p>
            </div>
            
            </div>
          
        )}
      </div>
    </section>
  );
}