import store from '../store/store.ts';
import {AuthorizationStatus} from '../consts.ts';
import {UserData} from './user-data.ts';
import CardInfo from './card-info.ts';
import Offer from './offer.ts';
import {Review} from './review.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined;
};

export type AppData = {
  loadingStatus: {
    isCardsLoading: boolean;
    isOfferLoading: boolean;
    isOffersNearbyLoading: boolean;
    isReviewsLoading: boolean;
    isFavoritesLoading: boolean;
  };
  offers: CardInfo[];
  favoriteOffers: CardInfo[];
  offer: Offer | undefined;
  offersNearby: CardInfo[];
  reviews: Review[];
}

export type AppProcess = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
