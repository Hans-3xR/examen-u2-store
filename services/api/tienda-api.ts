import axios from 'axios';

export const tiendaApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
});
