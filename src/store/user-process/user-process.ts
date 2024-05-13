import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../consts.ts';
import {checkAuthAction, fetchFavoriteOffersAction, loginAction, setOfferFavoriteStatus} from '../api-actions.ts';
import {dropToken, saveToken} from '../../services/token.ts';
import {logout} from '../action.ts';

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
      })
      .addCase(logout, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = undefined;
        dropToken();
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        if (!state.user) {
          return;
        }

        state.user.favoritesCount = action.payload.length;
      })
      .addCase(setOfferFavoriteStatus.fulfilled, (state, action) => {
        const {isFavorite, wasFavorite} = action.payload;
        if (!state.user) {
          return;
        }

        if (wasFavorite && !isFavorite) {
          state.user.favoritesCount--;
        }
        if (!wasFavorite && isFavorite) {
          state.user.favoritesCount++;
        }
      });
  }
});
