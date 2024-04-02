import CardInfo from './card-info.ts';
import Host from './host.ts';

type Offer = CardInfo & {
  description: string;
  bedrooms: 3;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export default Offer;
