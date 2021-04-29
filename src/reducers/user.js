import { CURRENT_USER, LOGIN_FAILED, OAUTH2_LOGIN, USER_LOGIN, USER_LOGOUT } from "../constants/actionTypes";
import { SECRET } from '../constants/key.js';
const jwt = require("jsonwebtoken");

export default (user = null, action) => {

    switch (action.type) {
        case CURRENT_USER:
            return action.payload ? {authenticated: true, user: action.payload} : {authenticated: false, user: null};
        case OAUTH2_LOGIN:
            return action.payload ? {authenticated: true, user: action.payload} : {authenticated: false, user: null};
        case USER_LOGIN:
            return action.payload ? { authenticated: true, user: action.payload } : {authenticated: false, user: null};
        case LOGIN_FAILED: 
        return  {authenticated: false, user: null};
        case USER_LOGOUT:
            return  null ;
        default:
            return null;
    }
}