import City from './types/city.ts';

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85837007133544,
      longitude: 2.294481297428969,
      zoom: 8
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.941039875108274,
      longitude: 6.960433268686378,
      zoom: 8
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8468586804477,
      longitude: 4.35244923799534,
      zoom: 8
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.54148807853091,
      longitude: 9.983132855314892,
      zoom: 8
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.23503664795653,
      longitude: 6.7730005128842246,
      zoom: 8
    }
  },
];

export enum AppRoute {
  Offers = '/'
}

export enum ApiRoutes {
  Offers = '/offers',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
