export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const REVIEW_COMMENT_MIN_LENGTH = 50;
export const REVIEW_COMMENT_MAX_LENGTH = 300;

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AppRoute {
  Offers = '/',
  NotFound = '*'
}

export enum ApiRoutes {
  Login = '/login',
  Offers = '/offers',
  Reviews = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  App = 'APP'
}
