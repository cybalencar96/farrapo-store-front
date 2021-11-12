import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL || 'https://farrapo-store-prod.herokuapp.com';

function createConfig(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }
    return config;
}

function signup(body) {
    return axios.post('/signup', body);
}

function signin(body) {
    return axios.post('/signin', body);
}

function logout(token) {
    return axios.post('/logout', "", createConfig(token));
}

function getHomepageItens(token) {
    return axios.get('/homepage/items', createConfig(token));
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

function addItemToCart (body) {
    return axios.post('/cart', body)
}

const api = {
    signup,
    signin,
    getHomepageItens,
    getItem,
    getItems,
    logout,
    addItemToCart,
}

export default api;
