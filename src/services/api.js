import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/';

function signup(body) {
    return axios.post('/signup', body)
}

function signin(body) {
    return axios.post('/signin', body)
}

function getHomepageItens() {
    return axios.get('/homepage/items');
}

function getItem(itemId) {
    return axios.get(`/items/${itemId}`);
}

function getItems(filters = {}) {
    const {
        color,
        maximumPrice,
        category,
    } = filters;
    let query = '';

    if (color) {
        query += `color=${color}&`
    }
    if (maximumPrice) {
        query += `maximumPrice=${maximumPrice}&`
    }
    if (category) {
        query += `category=${category}&`
    }

    return axios.get(`/items?${query}`)
}

const api = {
    signup,
    signin,
    getHomepageItens,
    getItem,
    getItems,
}

export default api;