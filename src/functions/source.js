import axios from 'axios';
const protocol = "http";
const domain = "localhost";
const port = "5000"
const sourceURL = protocol + "://" + domain + ":" + port;

export {
    axios,
    sourceURL
};