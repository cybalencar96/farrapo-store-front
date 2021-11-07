import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/';

function signup(body) {
    const {
        name,
        email,
        password,
        zipCode,
        streetNumber,
        complement,
        phone,
        genderName,
        birthDate,
        imageUrl,
    } = body

    return axios.post('/signup', {
        name,
        email,
        password,
        zipCode,
        streetNumber,
        complement,
        phone,
        genderName,
        birthDate,
        imageUrl,
    })
}

function signin(body) {
    const {
        email,
        password,
    } = body

    return axios.post('/signin', {
        email,
        password,
    })
}

const api = {
    signup,
    signin
}

export default api;