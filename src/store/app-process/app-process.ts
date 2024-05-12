import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts.ts';
import {AppProcess} from '../../types/state.ts';

const initialState: AppProcess = {
  city: 'Paris'
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    selectCity: (state, {payload}: PayloadAction<string>) => {
      state.city = payload;
    }
  }
});

export const {selectCity} = appProcess.actions;
