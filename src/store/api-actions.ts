import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoutes, AuthorizationStatus} from '../consts.ts';
import CardInfo from '../types/card-info.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {AuthResult} from '../types/auth-result.ts';
import {StatusCodes} from 'http-status-codes';
import Offer from '../types/offer.ts';
import {Review, PostReview} from '../types/review.ts';

export const fetchCardsAction = createAsyncThunk<CardInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CardInfo[]>(ApiRoutes.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${ApiRoutes.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<CardInfo[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CardInfo[]>(`${ApiRoutes.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoutes.Reviews}/${offerId}`);
    return data;
  },
);

export const postReview = createAsyncThunk<Review, {
  review: PostReview;
  offerId: string;
  resetForm: () => void;
  unblockForm: () => void;}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
    'data/postReview',
    async ({review, offerId, resetForm, unblockForm}, {extra: api}) => {
      try {
        const {data} = await api.post<Review>(`${ApiRoutes.Reviews}/${offerId}`, review);
        resetForm();
        unblockForm();
        return data;
      } catch (error) {
        unblockForm();
        throw error;
      }
    },
    );

export const checkAuthAction = createAsyncThunk<AuthResult, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoutes.Login);
      return {
        user: data,
        status: AuthorizationStatus.Auth
      };
    } catch {
      return {
        user: undefined,
        status: AuthorizationStatus.NoAuth
      };
    }
  },
);

export const loginAction = createAsyncThunk<AuthResult, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const result = await api.post<UserData>(ApiRoutes.Login, {email, password});

    return {
      user: result.data,
      status: result.status === StatusCodes.CREATED.valueOf() ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth
    };
  },
);
