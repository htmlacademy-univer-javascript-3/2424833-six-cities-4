import PlaceType from './place-type.ts';
import RatingStars from './rating.ts';
import City from './city.ts';
import Location from './location.ts';

type CardInfo = {
  id: string; // TODO: guid/uuid lib
  title: string;
  price: number;
  type: PlaceType;
  rating: RatingStars;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  city: City;
  location: Location;
};

export default CardInfo;
