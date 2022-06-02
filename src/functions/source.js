import axios from 'axios';
const protocol = "http";
const domain = "localhost";
const port = "5000"
const sourceURL = protocol + "://" + domain + ":" + port;

// const client = axios.create({
//     baseURL: sourceURL
// })

// client.interceptors.request.use(
//     function (config) {
//         const user = localStorage.getItem('user');
//         if (!user) {
//             config.headers["accessToken"] = null;
//             config.headers["refreshToken"] = null;
//             return config
//         }
//         const { accessToken, refreshToken } = JSON.parse(user)
//         config.headers["accessToken"] = accessToken;
//         config.headers["refreshToken"] = refreshToken;
//         return config
//     }
// )

// client.interceptors.response.use(
//     function (response) {
//         return response
//     },
//     async function (error) {
//         if (error.response && error.response.status === 403) {
//             try {
//                 const originalRequest = error.config;
//                 const data = await client.get('/auth/refresh')
//                 if (data) {
//                     const {accessToken, refreshToken} = data.data
//                     localStorage.removeItem('user')
//                     localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
//                     originalRequest.headers['accessToken'] = accessToken;
//                     originalRequest.headers['refreshToken'] = refreshToken;
//                     return await client.request(originalRequest);
//                 }
//             } catch (error){
//                 localStorage.removeItem('user');
//                 console.log(error);
//             }
//             return Promise.reject(error)
//         }
//         return Promise.reject(error)
//     }
// )

export {
    axios,
    sourceURL
};