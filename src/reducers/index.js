import { combineReducers } from "redux";
import categories from "./categories";
import products from './products';
import user from "./user";


export default combineReducers({
    products: products,
    categories: categories,
    user: user,
})