import { CURRENT_USER, USER_LOGIN } from '../constants/actionTypes.js';
import { SECRET } from '../constants/key.js';
import * as api from '../services/userService.js';
const jwt = require('jsonwebtoken');

export const getCurrentUser = () => async (dispatch) => {
    try {
        const token = await api.getCurrentUser();
        dispatch({type: CURRENT_USER, payload: token});
        console.log(token);
    } catch (error) {
        console.log(error);
    }
}

export const signin = (userReq) => async (dispatch) => {
    try {
        const { token } = await api.login(userReq);
        const user = jwt.verify(token, SECRET);
        localStorage.setItem('token', token);
        dispatch({type: USER_LOGIN, payload: user});
    } catch (error) {
        dispatch({type: 'LOGIN_FAILED', payload: null})
    }
}

