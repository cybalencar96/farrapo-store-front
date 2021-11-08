import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/';

function signup(body) {
    return axios.post('/signup', body)
}

function signin(body) {
    return axios.post('/signin', body)
}

function getHomepageItens() {
    return axios.get('/items/homepage');
}

const api = {
    signup,
    signin,
    getHomepageItens,
}

export default api;