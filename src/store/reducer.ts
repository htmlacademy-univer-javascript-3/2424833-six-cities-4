import City from '../types/city.ts';
import {offers} from '../mocks/offers.ts';
import CardInfo from '../types/card-info.ts';
import { createReducer } from '@reduxjs/toolkit';
import {selectCityAction, fillOffersAction} from './action.ts';

type State = {
  city: City;
  offers: CardInfo[];
}

const initialState: State = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85837007133544,
      longitude: 2.294481297428969,
      zoom: 8
    }},
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload.offers;
    });
});
