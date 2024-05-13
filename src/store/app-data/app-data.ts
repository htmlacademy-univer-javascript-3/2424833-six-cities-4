import {AppData} from '../../types/state.ts';
import {NameSpace} from '../../consts.ts';
import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCardsAction, fetchFavoriteOffersAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  postReview,
  setOfferFavoriteStatus
} from '../api-actions.ts';

const initialState: AppData = {
  loadingStatus: {
    isCardsLoading: false,
    isOfferLoading: false,
    isOffersNearbyLoading: false,
    isReviewsLoading: false,
    isFavoritesLoading: false
  },
  offers: [],
  favoriteOffers: [],
  offer: undefined,
  offersNearby: [],
  reviews: [],
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCardsAction.pending, (state) => {
        state.loadingStatus.isCardsLoading = true;
      })
      .addCase(fetchCardsAction.fulfilled, (state, action) => {
        state.loadingStatus.isCardsLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.loadingStatus.isFavoritesLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.loadingStatus.isFavoritesLoading = false;
        state.favoriteOffers = action.payload;
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
      })
      .addCase(setOfferFavoriteStatus.fulfilled, (_, action) => {
        const {isFavorite, setIsFavorite} = action.payload;
        setIsFavorite(isFavorite);
      });
  }
});

