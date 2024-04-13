import CardInfo from '../types/card-info.ts';

export const offers: CardInfo[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'apartment',
    rating: 4,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2',
    title: 'Wood and stone place',
    price: 80,
    type: 'room',
    rating: 4,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'apartment',
    rating: 4,
    isFavorite: false,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'apartment',
    rating: 5,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '5',
    title: 'Wood and stone place',
    price: 80,
    type: 'room',
    rating: 4,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    previewImage: 'img/room.jpg'
  },
  {
    id: '1d6e2017-26fe-4fe5-ae29-689bb3a7c963',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 209,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  }
];
