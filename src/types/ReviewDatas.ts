// testimonial-data.ts

export interface Review {
  image: string;
  name: string;
  designation: string;
  stars: number;
  review: string;
}

export const reviewsDatas: Review[] = [
  {
    image: '/images/home/client.jpg',
    name: 'James Carter',
    designation: 'Product Manager',
    stars: 5,
    review:
      'Amazing service! Very satisfied and would definitely recommend to others.',
  },
  {
    image: '/images/home/client.jpg',
    name: 'Sarah Williams',
    designation: 'UI/UX Designer',
    stars: 4,
    review: 'Great experience! The platform made everything smooth and fast.',
  },
  {
    image: '/images/home/client.jpg',
    name: 'Michael Lee',
    designation: 'Software Engineer',
    stars: 5,
    review:
      'Fantastic quality and excellent support. Exceeded my expectations!',
  },
  {
    image: '/images/home/client.jpg',
    name: 'Michael Lee',
    designation: 'Software Engineer',
    stars: 4,
    review:
      'Fantastic quality and excellent support. Exceeded my expectations!',
  },
];
