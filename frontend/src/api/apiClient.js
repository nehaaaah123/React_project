import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL || '/api';

console.log('API Base URL:', BASE_URL);

export const api = axios.create({
  baseURL: BASE_URL,        
  timeout: 10000,          
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
if (import.meta.env.DEV) {
  api.interceptors.request.use(request => {
    console.debug('Request:', request.method?.toUpperCase(), request.baseURL + request.url);
    return request;
  });

  api.interceptors.response.use(response => {
    console.debug('Response:', response.status, response.config.url);
    return response;
  }, error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  });
}

export default api;