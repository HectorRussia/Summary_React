import axios, { CanceledError } from "axios";

// by mosh
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export {CanceledError}

// by horn
export const apiclientservice = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
