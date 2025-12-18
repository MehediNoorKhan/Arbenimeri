export interface WorkCardItem {
  image: string;
  title: string;
  description: string;
}

export const workList: WorkCardItem[] = [
  {
    image: '/images/home/work-3.svg',
    title: '1. Fill out the form',
    description:
      'By recording the key data of your project once, you can reach hundreds of providers anonymously and in a time-saving manner.',
  },
  {
    image: '/images/home/work-2.svg',
    title: '2. Compare offers',
    description:
      'You will immediately receive up to a maximum of 3 offers from suitable providers in the area.',
  },
  {
    image: '/images/home/work-1.svg',
    title: '3. Save time and money',
    description:
      'Find the best offer quickly with minimal effort, leaving time for more important things.',
  },
];
