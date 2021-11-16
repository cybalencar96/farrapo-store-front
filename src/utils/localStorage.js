import {v4 as uuid} from 'uuid'
import api from '../services/api';

function getUserData() {
    const localUserData = localStorage.getItem('farrapo');
    if (localUserData) {
        return JSON.parse(localUserData)
    } else {
        const visitorToken = uuid();
        api.registerVisitor(visitorToken);

        localStorage.setItem('farrapo',JSON.stringify({
            userId: "", name: "", email: "", image: "", token: "", visitorToken
          }));
  
        return {
        userId: "", name: "", email: "", image: "", token: "", visitorToken
        }       
    }
}

function getCartData() {
    const localCartData = localStorage.getItem('farrapo-cart');
    
    if (localCartData) {
        return JSON.parse(localCartData)
    }
    
    return []
}

function updateCart(newCart) {
    localStorage.setItem('farrapo-cart', JSON.stringify(newCart))
}

export {
    getUserData,
    getCartData,
    updateCart,
}