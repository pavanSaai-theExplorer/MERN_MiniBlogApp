import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : "https://pavansai-miniblogapp.herokuapp.com/api/"
})