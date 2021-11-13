import {v4 as uuid} from 'uuid'

function getUserData() {
    const localUserData = localStorage.getItem('farrapo');
    if (localUserData) {
        return JSON.parse(localUserData)
    } else {
        const visitorToken = uuid();
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

export {
    getUserData,
    getCartData,
}