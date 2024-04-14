import {createAction} from '@reduxjs/toolkit';
import City from '../types/city.ts';
import CardInfo from '../types/card-info.ts';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FILL_OFFERS: 'FILL_OFFERS'
};

export const selectCityAction = createAction<{city: City}>(Action.SELECT_CITY);

export const fillOffersAction = createAction<{offers: CardInfo[]}>(Action.FILL_OFFERS);
