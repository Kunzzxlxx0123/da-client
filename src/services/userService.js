import axios from "axios";
import { ACCESS_TOKEN, baseUrl } from "../constants/key";



export default function getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}

export function login(loginRequest) {
    return axios.post(`${baseUrl}/api/auth/login`, JSON.stringify(loginRequest));
}