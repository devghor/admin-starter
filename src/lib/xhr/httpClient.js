import axios from 'axios';
import { apiConfig } from '../../config';

const httpClient = axios.create({
  timeout: apiConfig.timeOut,
  baseURL: apiConfig.baseURL,
});

httpClient.interceptors.request.use((config) => {
  config.headers.set('app-id', '6456f89f7adea5f6e3aee0fe');

  return config;
});

export default httpClient;
