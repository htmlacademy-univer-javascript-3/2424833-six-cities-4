import {UserData} from './user-data.ts';
import {AuthorizationStatus} from '../consts.ts';

export type AuthResult = {
  user: UserData | undefined;
  status: AuthorizationStatus;
}
