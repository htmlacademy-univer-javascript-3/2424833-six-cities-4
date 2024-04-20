import {createAction} from '@reduxjs/toolkit';
import City from '../types/city.ts';
import CardInfo from '../types/card-info.ts';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FETCH_CARDS: 'FETCH_CARDS'
};

export const selectCityAction = createAction<City>(Action.SELECT_CITY);

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const fetchCardsAction = createAction<CardInfo[]>(Action.FETCH_CARDS);
