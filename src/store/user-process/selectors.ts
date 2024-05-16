import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../consts.ts';
import {UserData} from '../../types/user-data.ts';

export const getIsAuthorized = (state: State): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const getUser = (state: State): UserData | undefined => state[NameSpace.User].user;
