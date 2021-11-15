import api from "../../../services/api";
import { updateCart } from '../../../utils/localStorage';
import { sendErrorAlert, sendSuccessAlert } from "../../../utils/SweetAlert";

function updateFrontEndCartAndAlertUser(res, setIsLoading, cart, setCart) {
    setIsLoading(false);
    const newCart = [...cart, res.data] 
    setCart(newCart);
    updateCart(newCart)
    sendSuccessAlert('Adicionado com sucesso! Acesse o carrinho para ver');
}

function updateFrontEndCartAndCheckout(res, setIsLoading, cart, setCart, navigate) {
    setIsLoading(false);
    const newCart = [...cart, res.data] 
    setCart(newCart);
    updateCart(newCart)
    navigate("/checkout")
}

function AlertError(err, setIsLoading) {
    setIsLoading(false);
    console.log(err.response);
    if (err.response) {
        if (err.response.status === 403) 
            sendErrorAlert('Hmm.. algumas pessoas também estão de olho nesse item. Limite dinâmico atingido');
        if (err.response.status === 409)
            sendErrorAlert('Item já está no carrinho. Acesse-o para alterar quantidades')
    }
}

function updateDatabaseCart(itemId, userData, SuccessFunction, ErrorFunction) {
        const body = {
            itemId: itemId,
            quantity: 1,
        };
        
        if (userData.userId) {
            body['userId'] = userData.userId;
        } else {
            body['visitorToken'] = userData.visitorToken;
        }

        api.addItemToCart(body)
            .then(res => {
                SuccessFunction(res)
            })
            .catch(err => {
                ErrorFunction(err)
            });
}

function addItemToCart(setIsLoading, itemId, userData, cart, setCart) {
    setIsLoading(true);
    updateDatabaseCart(
        itemId,
        userData,
        (res) => updateFrontEndCartAndAlertUser(res, setIsLoading, cart, setCart),
        (err) => AlertError(err, setIsLoading)
    );
}

function addItemToCartAndCheckout(setIsLoading, itemId, userData, cart, setCart, navigate) {
    setIsLoading(true);
    updateDatabaseCart(
        itemId,
        userData,
        (res) => updateFrontEndCartAndCheckout(res, setIsLoading, cart, setCart, navigate),
        (err) => AlertError(err, setIsLoading)
    );
}

export {
    addItemToCart,
    addItemToCartAndCheckout,
}