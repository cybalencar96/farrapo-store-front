import api from "../../../services/api";
import {sendErrorAlert} from "../../../utils/SweetAlert";
import { getUserData, getCartData } from '../../../utils/localStorage.js';

function userLogOut(token, setIsLoading, setUserData, setCart, setIsMenuOpen, navigate ) {
    setIsLoading(true);
    api.logout(token)
    .then(res => {
        localStorage.removeItem('farrapo');
        localStorage.removeItem('farrapo-cart');
        setUserData(getUserData());
        setCart(getCartData());
        setIsMenuOpen(false)
        setIsLoading(false);
        navigate('/');
    })
    .catch(err => {
        setIsLoading(false);
        sendErrorAlert(err.response.data)
    });
}

export {
    userLogOut,
}