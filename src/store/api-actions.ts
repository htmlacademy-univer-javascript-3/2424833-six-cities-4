import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoutes, AuthorizationStatus} from '../consts.ts';
import CardInfo from '../types/card-info.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {AuthResult} from '../types/auth-result.ts';
import {StatusCodes} from 'http-status-codes';

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
