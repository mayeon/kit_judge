import axios from 'axios';
const protocol = "http";
const domain = "localhost";
const port = "5000"
const sourceURL = protocol + "://" + domain + ":" + port;

const axiosInstance = axios.create({
    baseURL: sourceURL,
    headers: {
        "Content-Type": "application/json",
    },
})

axiosInstance.interceptors.request.use(
    function(config) {
        const access_token = sessionStorage.getItem("access_token");
        if(access_token) {
            config.headers.common["Authorization"] = `Bearer ${access_token.replace(/"/g, '')}`;
        }
        return config;
    }, 
    
    function(err) {
        return Promise.reject(err);
    }
)

export {
    axios,
    sourceURL,
    axiosInstance
};