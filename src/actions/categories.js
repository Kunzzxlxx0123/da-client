import { GET_PAGE_PRODUCTS, GET_TREE_CATEGORIES } from '../constants/actionTypes.js';
import * as api from '../services/categorySerivce.js';

//Action tree categories
export const getTreeCategories = () => async (dispatch) => {
    try {
        const { data } = await api.getTreeCategories();
        console.log(data);
        dispatch({ type: GET_TREE_CATEGORIES, payload: data });
    } catch (error) {
        console.log(error);
    }
}


