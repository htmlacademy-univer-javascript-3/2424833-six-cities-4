import CardInfo from '../types/card-info.ts';
import {createReducer} from '@reduxjs/toolkit';
import {selectCityAction} from './action.ts';
import {
  checkAuthAction,
  fetchCardsAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  loginAction, postReview
} from './api-actions.ts';
import {AuthorizationStatus} from '../consts.ts';
import {UserData} from '../types/user-data.ts';
import {saveToken} from '../services/token.ts';
import Offer from '../types/offer.ts';
import {Review} from '../types/review.ts';

type State = {
  city: string;
  loadingStatus: {
    isCardsLoading: boolean;
    isOfferLoading: boolean;
    isOffersNearbyLoading: boolean;
    isReviewsLoading: boolean;
  };
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined;
  offers: CardInfo[];
  offer: Offer | undefined;
  offersNearby: CardInfo[];
  reviews: Review[];
}

const initialState: State = {
  city: 'Paris',
  loadingStatus: {
    isCardsLoading: false,
    isOfferLoading: false,
    isOffersNearbyLoading: false,
    isReviewsLoading: false
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
  offers: [],
  offer: undefined,
  offersNearby: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = action.payload.status;
      state.user = action.payload.user;
      saveToken(state.user!.token);
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = action.payload.status;
      state.user = action.payload.user;
    })
    .addCase(fetchCardsAction.pending, (state) => {
      state.loadingStatus.isCardsLoading = true;
    })
    .addCase(fetchCardsAction.fulfilled, (state, action) => {
      state.loadingStatus.isCardsLoading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.loadingStatus.isOfferLoading = true;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.loadingStatus.isOfferLoading = false;
      state.offer = action.payload;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.loadingStatus.isOfferLoading = false;
      state.offer = undefined;
    })
    .addCase(fetchOffersNearbyAction.pending, (state) => {
      state.loadingStatus.isOffersNearbyLoading = true;
    })
    .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
      state.loadingStatus.isOffersNearbyLoading = false;
      state.offersNearby = action.payload;
    })
    .addCase(fetchOffersNearbyAction.rejected, (state) => {
      state.loadingStatus.isOffersNearbyLoading = false;
      state.offersNearby = [];
    })
    .addCase(fetchReviewsAction.pending, (state) => {
      state.loadingStatus.isReviewsLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.loadingStatus.isReviewsLoading = false;
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.loadingStatus.isReviewsLoading = false;
      state.reviews = [];
    })
    .addCase(postReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    });
});
