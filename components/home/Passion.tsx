"use client";

import { useState } from "react";
import Image from "next/image";
import Flag from "../Flag";
import { Cross, FolderClosed, X } from "lucide-react";

interface CardData {
  title: string;
  image?: string;
  description: string;
  learnMoreLink: string;
}

const cards: CardData[] = [
  {
    title:
      "OPM and UNHCR conducting the urban protection working group meeting at UNHCR with partners in the urban refugee programme.",
    image: "/news/opm&unhcr.jpg",
    description:
      "OPM in November/December 2024 conducted accelerated refugee status determination for the backlog of asylum seekers through the Refugee Eligibility Committee and the secretariat at the Department of Refugees.",
    learnMoreLink: "/investment",
  },
  {
    title:
      "New arrivals of Congolese refugees received at Matanda transit center and being relocated to Nakivale Refugee Settlement",
    image: "/news/congolese.jpg",
    description:
      "In addressing partnerships, the OPM held a series of partnership engagements that included support for the development of a theory of change for the M&E unit within the Department of Refugees supported by Instinglio.Other partnerships included engagements with UN agencies, the World Bank, MDAs, NGOs among many others.",
    learnMoreLink: "/partnership",
  },
  {
    title:
      "Assistant Commissioner Refugees (Centre), Mr. Douglas Asiimwe together with the head of Instinglio and the Deputy Representative UNHCR, Jason Hepps at Hotel Africana consulting on the development of the theory of change framework to support the Department of Refugees in April 2024",
    description:
      "OPM working with UNHCR, host local governments and the partners including the refugees successfully conducted the 2024 World Refugee Day with the national commemoration event talking place in Rhino Camp Settlement, Terego district. The Hon.State Minister for Relief, Disaster Preparedness and Refugees represented the Hon.Minister for Relief, Disaster Preparedness and Refugees calling for increased funding to the refugee programme in Uganda amidst growing refugee numbers in the country.",
    learnMoreLink: "/blog",
    image: "/news/commissioner.jpg",
  },
];

export default function Passion() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section className="bg-[#EDF0F2] py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-secondary font-normal">
            Uganda Refugee News and Updates
          </h2>
          <div className="">
            <Flag />
          </div>
          <p className="text-secondary/50 text-sm max-w-full md:max-w-96 mb-6 md:mb-8">
            Partnerships and Coordination to offer Protection
            Services/Assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => setSelectedCard(card)}
            >
              <h3 className="text-lg font-semibold mb-2 text-secondary line-clamp-3 transition-colors">
                {card.title}
              </h3>
              <div className="relative rounded-xl overflow-hidden h-48">
                <Image
                  src={card.image || "/placeholder-image.jpg"}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="text-xs">
                <p className="text-secondary/50 mt-4 line-clamp-3">
                  {card.description}
                </p>
                <p className="text-blue-600 mt-4 font-medium">Learn More</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div
            className="fixed text-secondary inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-secondary/50 hover:text-secondary transition-colors"
                onClick={() => setSelectedCard(null)}
              >
                <X size={25} className="hover:rotate-90 duration-300" />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
              <img
                src={selectedCard.image || "/placeholder-image.jpg"}
                alt={selectedCard.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-600  mb-6">{selectedCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
