import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        'access_key': process.env.REACT_APP_ACCESS_KEY
    }
})