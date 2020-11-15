// import axios from 'axios';
// import { getToken } from './Authentication';

// const headers = {
//     'Content-Type': 'application/json'
// };

// const API = axios.create({
//     baseURL: process.env.API_URL,
//     headers
// });

// API.interceptors.request.use(async config => {
//     const token = getToken();

//     if(token)
//         config.headers.Authorization = `Bearer ${ token }`;

//     return config;
// })

// export default API;

import fetch from 'isomorphic-unfetch';

const fetcher = async path => {
    const res = await fetch(process.env.API_URL + path);
    const json = await res.json();

    return json;
};

export default fetcher;