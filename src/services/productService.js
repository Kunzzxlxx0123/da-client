
import axios from 'axios';
import { baseUrl } from '../constants/key.js';

export const fetchProducts = () => axios.get(`${baseUrl}/api/product`);

export const findById = (id) => axios.get(`${baseUrl}/api/product/${id}`);

