import Image from 'next/image';

type Settlement = {
  n: number;
  name: string;
};

export const REFUGEE_SETTLEMENTS: Settlement[] = [
  { n: 1, name: 'Nakivale (Isingiro)' },
  { n: 2, name: 'Oruchinga (Isingiro)' },
  { n: 3, name: 'Kyaka II (Kyegegwa)' },
  { n: 4, name: 'Rwamwanja (Kamwenge)' },
  { n: 5, name: 'Kyangwali (Kikuube)' },
  { n: 6, name: 'Kiryandongo (Kiryandongo)' },
  { n: 7, name: 'Adjumani (Adjumani)' },
  { n: 8, name: 'Palabek (Lamwo)' },
  { n: 9, name: 'Lobule (Koboko)' },
  { n: 10, name: 'Rhino Camp (Madi-Okollo)' },
  { n: 11, name: 'Bidi Bidi (Yumbe)' },
  { n: 12, name: 'Imvepi (Arua)' },
];

export default function UgandaMap() {
  return (
    <Image
      src="/refugee settlements.jpg"
      alt="Map of Uganda showing refugee settlements across West Nile, Central and South-Western regions"
      width={917}
      height={953}
      className="w-full h-auto"
      priority
    />
  );
}
