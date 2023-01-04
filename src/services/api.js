import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=ffc4e2a0702ac7e43b0dc36e69cbc75a&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;