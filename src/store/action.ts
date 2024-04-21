import {createAction} from '@reduxjs/toolkit';
import City from '../types/city.ts';

export const selectCityAction = createAction<City>('selectCity');
