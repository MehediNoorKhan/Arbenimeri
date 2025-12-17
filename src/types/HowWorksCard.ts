export interface WorkCardItem {
  image: string;
  title: string;
  description: string;
}

export const workList: WorkCardItem[] = [
  {
    image: '/images/home/work-3.svg',
    title: 'Project Insights',
    description:
      'By recording the key data of your project once, you can reach hundreds of providers anonymously and in a time-saving manner.',
  },
  {
    image: '/images/home/work-2.svg',
    title: 'Fast Connections',
    description:
      'Quickly connect with multiple vendors without sharing sensitive project details publicly.',
  },
  {
    image: '/images/home/work-1.svg',
    title: 'Secure Data',
    description:
      'Keep your project data safe while still getting maximum exposure to potential providers.',
  },
];
