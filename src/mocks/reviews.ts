import Review from '../types/review.ts';

export const reviews: Review[] = [
  {
    id: '1',
    date: new Date(2019, 4, 24, 15),
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4
  },
  {
    id: '2',
    date: new Date(2050, 1, 1, 1),
    user: {
      name: 'Hater',
      avatarUrl: 'img/avatar.svg',
      isPro: false
    },
    comment: 'Pork head in the fridge',
    rating: 1
  }
];
