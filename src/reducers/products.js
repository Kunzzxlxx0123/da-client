import { CREATE_PRODUCT, GET_PAGE_PRODUCTS, GET_PRODUCT } from "../constants/actionTypes";


export default ( products = [], action) => {

    switch (action.type) {
        case GET_PAGE_PRODUCTS:
            return action.payload;
        case CREATE_PRODUCT:
            return products;
        case GET_PRODUCT: 
            return [action.payload];
        default:
            return products;
    }
}