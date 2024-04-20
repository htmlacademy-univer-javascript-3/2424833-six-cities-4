import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import * as actions from './action.ts';
import {ApiRoutes} from '../consts.ts';
import CardInfo from '../types/card-info.ts';
import {setLoadingStatus} from './action.ts';

export const fetchCardsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<CardInfo[]>(ApiRoutes.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(actions.fetchCardsAction(data));
  },
);
