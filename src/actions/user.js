import { CURRENT_USER, LOGIN_FAILED, OAUTH2_LOGIN, USER_LOGIN } from '../constants/actionTypes.js';
import { ACCESS_TOKEN, SECRET } from '../constants/key.js';
import getToken, * as api from '../services/userService.js';
const jwt = require('jsonwebtoken');

export const getCurrentUser = () => async (dispatch) => {

    try{
        const token = localStorage.getItem(ACCESS_TOKEN);
        const user = await jwt.verify(token, new Buffer(SECRET, "base64"));
        dispatch({type: CURRENT_USER, payload: user})
    }  catch (error) {
        console.log(error);
        dispatch({type: 'LOGIN_FAILED', payload: null});
    }
}


export const oauth2Singin = (token) => async (dispatch) => {
    try{
        const user = jwt.verify(token, new Buffer(SECRET, 'base64'))
        dispatch({type : OAUTH2_LOGIN, payload: user});
        localStorage.setItem(ACCESS_TOKEN, token);
    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_FAILED, payload: null});
    }
}



export const signin = (userReq) => async (dispatch) => {
    try {
        const { token } = await api.login(userReq);
        const user = jwt.verify(token, SECRET);
        localStorage.setItem('token', token);
        dispatch({type: USER_LOGIN, payload: user});
    } catch (error) {
        dispatch({type: LOGIN_FAILED, payload: null})
    }
}

