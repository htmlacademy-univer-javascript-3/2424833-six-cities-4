import axios, {AxiosInstance} from 'axios';
import {getToken} from './token.ts';

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

  return api;
};
