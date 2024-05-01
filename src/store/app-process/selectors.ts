import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts.ts';

export const getCity = (state: State): string => state[NameSpace.App].city;
