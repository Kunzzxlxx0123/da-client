import { GET_PAGE_PRODUCTS, GET_PRODUCT } from '../constants/actionTypes.js';
import * as api from '../services/productService.js';

//Action get page products
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        console.log(data);
        dispatch({ type: GET_PAGE_PRODUCTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const findById = (id) => async (dispatch) => {
    try {
        const { data } = await api.findById(id);
        console.log(data);
        dispatch ({ type: GET_PRODUCT, payload: data});
    } catch (error) {
        console.log(error);
    }
}







