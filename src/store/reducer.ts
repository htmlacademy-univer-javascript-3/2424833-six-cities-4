import City from '../types/city.ts';
import CardInfo from '../types/card-info.ts';
import {createReducer} from '@reduxjs/toolkit';
import {selectCityAction} from './action.ts';
import {checkAuthAction, fetchCardsAction, loginAction} from './api-actions.ts';
import {AuthorizationStatus} from '../consts.ts';
import {UserData} from '../types/user-data.ts';
import {saveToken} from '../services/token.ts';

type State = {
  city: City;
  offers: CardInfo[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined;
}

const initialState: State = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85837007133544,
      longitude: 2.294481297428969,
      zoom: 13
    }},
  offers: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchCardsAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCardsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = action.payload.status;
      state.user = action.payload.user;
      saveToken(state.user!.token);
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = action.payload.status;
      state.user = action.payload.user;
    });
});