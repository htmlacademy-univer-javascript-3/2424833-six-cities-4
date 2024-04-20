import City from '../types/city.ts';
import CardInfo from '../types/card-info.ts';
import { createReducer } from '@reduxjs/toolkit';
import {selectCityAction, fetchCardsAction, setLoadingStatus} from './action.ts';

type State = {
  city: City;
  offers: CardInfo[];
  isLoading: boolean;
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
  isLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(fetchCardsAction, (state, action) => {
      state.offers = action.payload;
    });
});
