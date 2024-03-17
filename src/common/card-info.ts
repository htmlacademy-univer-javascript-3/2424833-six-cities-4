import PlaceType from './place-type.ts';
import RatingStars from './rating.ts';

type CardInfo = {
  name: string;
  price: number;
  type: PlaceType;
  rating: RatingStars;
  isInBookmarks: boolean;
};

export default CardInfo;
