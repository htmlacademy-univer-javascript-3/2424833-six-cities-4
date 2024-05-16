import {State} from '../../types/state.ts';
import CardInfo from '../../types/card-info.ts';
import {NameSpace} from '../../consts.ts';
import Offer from '../../types/offer.ts';
import {Review} from '../../types/review.ts';

export const getCityOffers = (state: State): CardInfo[] => state[NameSpace.Data].offers.filter(
  (card) => card.city.name === state[NameSpace.App].city);
export const getFavoriteOffers = (state: State): CardInfo[] => state[NameSpace.Data].favoriteOffers;
export const hasCityOffers = (state: State): boolean => getCityOffers(state).length > 0;
export const hasFavoriteOffers = (state: State): boolean => getFavoriteOffers(state).length > 0;
export const getOffer = (state: State): Offer | undefined => state[NameSpace.Data].offer;
export const getOffersNearby = (state: State): CardInfo[] => state[NameSpace.Data].offersNearby;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const isOffersLoading = (state: State): boolean => state[NameSpace.Data].loadingStatus.isCardsLoading;
export const isFavoritesLoading = (state: State): boolean => state[NameSpace.Data].loadingStatus.isFavoritesLoading;
export const isOfferPageDataLoading = (state: State): boolean => {
  const loadingStatus = state[NameSpace.Data].loadingStatus;
  return loadingStatus.isOfferLoading || loadingStatus.isOffersNearbyLoading || loadingStatus.isReviewsLoading;
};
