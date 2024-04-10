import CardInfo from '../types/card-info.ts';
import PlaceType from '../types/place-type.ts';
import RatingStars from '../types/rating.ts';

export const offers: CardInfo[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: PlaceType.Apartment,
    rating: RatingStars.Four,
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
    type: PlaceType.Room,
    rating: RatingStars.Four,
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
    type: PlaceType.Apartment,
    rating: RatingStars.Four,
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
    type: PlaceType.Apartment,
    rating: RatingStars.Five,
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
    type: PlaceType.Room,
    rating: RatingStars.Four,
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
  }
];
