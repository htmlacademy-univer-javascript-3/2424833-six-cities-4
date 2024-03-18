import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import PlaceType from './common/place-type.ts';
import RatingStars from './common/rating.ts';
import CardInfo from './common/card-info.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards: CardInfo[] = [
  {
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    type: PlaceType.Apartment,
    rating: RatingStars.Four,
    isInBookmarks: false
  },
  {
    name: 'Wood and stone place',
    price: 80,
    type: PlaceType.Room,
    rating: RatingStars.Four,
    isInBookmarks: true
  },
  {
    name: 'Canal View Prinsengracht',
    price: 132,
    type: PlaceType.Apartment,
    rating: RatingStars.Four,
    isInBookmarks: false
  },
  {
    name: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: PlaceType.Apartment,
    rating: RatingStars.Five,
    isInBookmarks: false
  },
  {
    name: 'Wood and stone place',
    price: 80,
    type: PlaceType.Room,
    rating: RatingStars.Four,
    isInBookmarks: true
  }];

root.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>
);

