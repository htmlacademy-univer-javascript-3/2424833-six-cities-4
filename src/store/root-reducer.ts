import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process.ts';
import {NameSpace} from '../consts.ts';
import {appData} from './app-data/app-data.ts';
import {appProcess} from './app-process/app-process.ts';

const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer
});

export default rootReducer;
