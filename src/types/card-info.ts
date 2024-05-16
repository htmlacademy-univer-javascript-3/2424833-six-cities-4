import City from './city.ts';
import Location from './location.ts';

type CardInfo = {
  id: string;
  title: string;
  price: number;
  type: string;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  city: City;
  location: Location;
};

export default CardInfo;
