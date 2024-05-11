import CardInfo from './card-info.ts';
import {UserData} from './user-data.ts';

type Offer = CardInfo & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserData;
  images: string[];
  maxAdults: number;
}

export default Offer;
