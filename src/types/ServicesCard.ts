export type CardItem = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
};

export type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

// Array of card objects
export const workList: CardItem[] = [
  {
    id: 1,
    imageSrc: '/images/home/frame-1.svg',
    title: 'Moving & Cleaning',
    description: 'Complete moving support with seamless post-move cleaning included.',
  },
  {
    id: 2,
    imageSrc: '/images/home/frame-2.svg',
    title: 'Moving',
    description:
      'Fast, reliable transport service for homes, offices, and relocations.',
  },
  {
    id: 3,
    imageSrc: './images/home/frame-3.svg',
    title: 'Cleaning',
    description:
      'Professional cleaning assistance for move-in, move-out, and deep cleaning needs.',
  },
  {
    id: 4,
    imageSrc: './images/home/frame-4.svg',
    title: 'Painting',
    description:
      'Skilled painters for refresh, renovation, and post-move wall touch-ups.',
  },
  {
    id: 5,
    imageSrc: './images/home/frame-5.svg',
    title: 'Gardening',
    description:
      'Expert garden care, maintenance, and outdoor cleanup services.',
  },
];
