import CardInfo from '../types/card-info.ts';
import PlaceType from '../types/place-type.ts';
import RatingStars from '../types/rating.ts';

export const favorites: CardInfo[] = [
  {
    id: '1',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: PlaceType.Apartment,
    rating: RatingStars.Five,
    isFavorite: true,
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
    previewImage: 'img/apartment-small-03.jpg'
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
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    title: 'White castle',
    price: 180,
    type: PlaceType.Apartment,
    rating: RatingStars.Five,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Cologne',
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
    previewImage: 'img/apartment-small-04.jpg'
  }
];
