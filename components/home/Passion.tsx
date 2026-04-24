"use client";

import { useState } from "react";
import Image from "next/image";
import Flag from "../Flag";
import { X } from "lucide-react";

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
    <section className="bg-surface-muted py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-3">
              <span className="inline-block w-8 h-px bg-civic" />
              <span>From the Department of Refugees</span>
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground font-normal leading-tight">
              News & Updates{" "}
              <span className="text-authority italic">from OPM partnerships.</span>
            </h2>
          </div>
          <div className="flex items-end gap-6">
            <p className="text-foreground-muted text-sm max-w-80">
              Featured updates from partnerships coordinated through PCMS. More departments and sectors coming soon.
            </p>
            <div className="hidden md:block flex-shrink-0">
              <Flag />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <button
              key={card.title}
              type="button"
              className="text-left bg-surface border border-border rounded-xl p-6 overflow-hidden shadow-sm hover:shadow-lg hover:border-authority/40 transition-all duration-300 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setSelectedCard(card)}
              aria-label={`Read more: ${card.title}`}
            >
              <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                <Image
                  src={card.image || "/placeholder-image.jpg"}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-lg font-normal mb-2 text-foreground line-clamp-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted line-clamp-3 mb-3">
                {card.description}
              </p>
              <p className="text-xs font-semibold text-authority group-hover:text-civic transition-colors">
                Read more →
              </p>
            </button>
          ))}
        </div>

        {selectedCard && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="bg-surface border border-border text-foreground rounded-xl max-w-2xl w-full p-6 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute top-4 right-4 text-foreground-muted hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                onClick={() => setSelectedCard(null)}
              >
                <X size={22} className="hover:rotate-90 duration-300" />
              </button>
              <h2 className="font-display text-2xl md:text-3xl font-normal mb-4 pr-8 leading-tight">{selectedCard.title}</h2>
              <img
                src={selectedCard.image || "/placeholder-image.jpg"}
                alt={selectedCard.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-foreground-muted mb-6 leading-relaxed">{selectedCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
