import axios from "axios";
import { baseUrl } from "../constants/key";



export function getCurrentUser() {
    return localStorage.getItem("token");
}

export function login(loginRequest) {
    return axios.post(`${baseUrl}/api/auth/login`, JSON.stringify(loginRequest));
}