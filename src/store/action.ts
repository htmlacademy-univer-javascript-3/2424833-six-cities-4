import {createAction} from '@reduxjs/toolkit';
import City from '../types/city.ts';
import {AppRoute} from '../consts.ts';

export const selectCityAction = createAction<City>('selectCity');


export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
