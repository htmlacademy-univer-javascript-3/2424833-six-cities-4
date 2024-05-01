import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../consts.ts';
import {checkAuthAction, loginAction} from '../api-actions.ts';
import {saveToken} from '../../services/token.ts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload.status;
        state.user = action.payload.user;
        saveToken(state.user!.token);
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload.status;
        state.user = action.payload.user;
      });
  }
});
