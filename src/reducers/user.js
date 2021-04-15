import { CURRENT_USER, USER_LOGIN, USER_LOGOUT } from "../constants/actionTypes";
import { SECRET } from '../constants/key.js';
const jwt = require("jsonwebtoken");

export default (user = {authenticated: false, user: null}, action) => {

    switch (action.type) {
        case CURRENT_USER:
            try {
                var user = jwt.verify(action.payload, SECRET);
                return { authenticated: true, user: user };
            } catch (error) {
                return {authenticated: false, user: null};
            }

        case USER_LOGIN:
            return action.payload ? { authenticated: true, user: action.payload } : { authenticated: false, user: null };
        case USER_LOGOUT:
            return  {authenticated: false, user: null} ;
        default:
            return {authenticated: false, user: null};
    }
}