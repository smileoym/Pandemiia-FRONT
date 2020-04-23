import axios from 'axios';

const REQUEST_TIMEOUT = 10000;

const api = axios.create({
  baseURL: process.env.API_HOST,
  withCredentials: false,
  timeout: REQUEST_TIMEOUT
});

export default api;
