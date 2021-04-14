import { GET_TREE_CATEGORIES } from "../constants/actionTypes";

export default (categories = [], action) => {

    switch (action.type) {
        case GET_TREE_CATEGORIES:
            return action.payload;
        // case CREATE_PRODUCT:
        //     return [
        //         action.payload,
        //         ...categories
        //     ];
        default:
            return categories;
    }
}