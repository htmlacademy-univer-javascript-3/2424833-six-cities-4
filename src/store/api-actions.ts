import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoutes} from '../consts.ts';
import CardInfo from '../types/card-info.ts';

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
