import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../consts.ts';

export const selectCityAction = createAction<string>('selectCity');


export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
