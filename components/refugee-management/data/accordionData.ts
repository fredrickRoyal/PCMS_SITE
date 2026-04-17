interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  nodeComponent?: React.ReactNode;
}

export const accordionData: AccordionItem[] = [
  {
    id: '1',
    title: 'OPM REFUGEE MANAGEMANT STRUCTURE',
    description: 'The Prime Minister and Minister of Disaster Preparedness, Relief and Refugees provide strategic direction for refugee management.',
    imageSrc: '/about.jpeg'
  },
  {
    id: '2',
    title: 'CO-ORDINATION OF REFUGEE RESPONSE IN UGANDA',
    description: 'The Permanent Secretary and Commissioner for Refugees oversee day-to-day operations and policy implementation.',
    imageSrc: '/home.jpeg'
  },
  {
    id: '3',
    title: 'THE DEPARTMENT OF REFUGEES',
    description: 'Regional Data Offices and Refugee Settlements manage local operations and direct refugee support.',
    imageSrc: '/graph.png'
  },
  {
    id: '4',
    title: 'THE COMPREHENSIVE REFUGEE RESPONSE FRAMEWORK (CRRF)',
  }
];