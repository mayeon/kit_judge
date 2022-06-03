import axios from 'axios';
const protocol = "http";
const domain = "localhost";
const port = "5000"
const sourceURL = "https://kumohcheck.d-o-g.fun";

const axiosInstance = axios.create({
    baseURL: sourceURL,
    headers: {
        "Content-Type": "application/json"
    },
})

export {
    axios,
    sourceURL,
    axiosInstance
};