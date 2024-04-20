import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {createAPI} from '../api.ts';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export default store;
