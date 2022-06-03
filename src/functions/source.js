import axios from 'axios';
const protocol = "http";
const domain = "localhost";
const port = "5000"
const sourceURL = protocol + "://" + domain + ":" + port;

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