import axios, {AxiosError, AxiosInstance} from 'axios';
import {getToken} from './token.ts';
import {AppRoute} from '../consts.ts';
import {StatusCodes} from 'http-status-codes';
import browserHistory from '../browser-history.ts';

const URL = 'https://14.design.htmlacademy.pro/six-cities';
const TIMEOUT_MS = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT_MS,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        // TODO: keep url
        browserHistory.push(AppRoute.NotFound, {path: location});
      }

      throw error;
    }
  );

  return api;
};
