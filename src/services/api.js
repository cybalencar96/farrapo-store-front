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

function getSession(token) {
    return axios.get('/user', createConfig(token));
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

function getSearchItems(query) {
    return axios.get(query);
}

function getFilters() {
    return axios.get('/filters');
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

function getCartItems({ userId, visitorToken }) {
    const clientId = userId ? userId : visitorToken;
    const clientQuery = userId ? 'userId' : 'visitorToken';

    return axios.get(`/cart?${clientQuery}=${clientId}`);
}

function getPurchaseHistory(token) {
    return axios.get('/purchase-history', createConfig(token));
}

function deleteClientCart ({ clientType, token }) {
    return axios.delete(`/cart/all/${clientType}&${token}`);
}

function deleteItemFromClientCart ({ clientType, token, itemId }) {
    return axios.delete(`/cart/item/${clientType}&${token}&${itemId}`);
}

function updateItemQuantityFromClientCart ({ clientType, token, itemId, quantity }) {
    return axios.put(`/cart/`, {clientType, token, itemId, quantity});
}

function usersCheckout (userData, cart, token) {
    return axios.post(`/checkout/`, {userData, cart}, createConfig(token));
}

function getPurchaseByPurchaseToken(token) {
    return axios.get('/purchase-history/token', createConfig(token));
}

function transferCartFromVistantToUser({userId, visitorToken}) {
    return axios.put(`/cart/transfer`, { userId, visitorToken });
}

function registerVisitor(visitorToken) {
    return axios.post('/visitor', {visitorToken});
}

const api = {
    signup,
    signin,
    getHomepageItens,
    getItem,
    getItems,
    logout,
    getSearchItems,
    getFilters,
    addItemToCart,
    getCartItems,
    getSession,
    getPurchaseHistory,
    deleteClientCart,
    deleteItemFromClientCart,
    updateItemQuantityFromClientCart,
    usersCheckout,
    getPurchaseByPurchaseToken,
    transferCartFromVistantToUser,
    registerVisitor,
}

export default api;
