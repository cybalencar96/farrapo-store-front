import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/';

function signup(body) {
    return axios.post('/signup', body)
}

function signin(body) {
    return axios.post('/signin', body)
}

const api = {
    signup,
    signin
}

export default api;