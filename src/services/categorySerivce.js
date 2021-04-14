import axios from 'axios';
import { baseUrl } from '../constants/key.js';


//Get tree categories
export const getTreeCategories = () => axios.get(`${baseUrl}/api/category`);