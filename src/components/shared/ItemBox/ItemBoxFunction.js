import { sendErrorAlert, sendSuccessAlert, sendConfirmAlert} from "../../../utils/SweetAlert.js";
import { updateCart } from "../../../utils/localStorage";
import api from "../../../services/api";


async function deleteItemFromCart({ userData, itemId, setIsLoading, cart, setCart }) {

    const alert = await sendConfirmAlert("Deseja realmente excluir este item?", "Sim");
    if (!alert.isConfirmed) {
        return
    }
    
    let clientType;
    let token;
    if (userData.visitorToken) {
        clientType = "visitor";
        token = userData.visitorToken;
    } else {
        clientType = "user";
        token = userData.token;
    }

    setIsLoading(true);
    api.deleteItemFromClientCart({ clientType, token, itemId })
        .then(res => {
            setIsLoading(false);
            const newCart = cart.filter( item => Number(item.itemId) !== Number(res.data.item_id));
            updateCart(newCart);
            setCart(newCart);
            sendSuccessAlert('Item removido com sucesso!')
        })
        .catch(err => {
            setIsLoading(false);
            sendErrorAlert("Oh não, parece que houve um problema com o servidor!")
        })
}

function updateItemQuantity({ userData, setIsLoading, itemId, quantity, maxQty, cart, setCart }) {
    
    if (quantity > maxQty || quantity === 0) {
        return
    }

    let clientType;
    let token;
    if (userData.visitorToken) {
        clientType = "visitor";
        token = userData.visitorToken;
    } else {
        clientType = "user";
        token = userData.token;
    }

    setIsLoading(true);
    api.updateItemQuantityFromClientCart({ clientType, token, itemId, quantity })
        .then(res => {
            setIsLoading(false);
            const newCart = [...cart];
            newCart.forEach(item => {
                if (item.itemId === res.data.item_id) {
                    item.cartQty = res.data.quantity;
                }
            });
            updateCart(newCart);
            setCart(newCart);
        })
        .catch(err => {
            setIsLoading(false);
            sendErrorAlert("Oh não, parece que houve um problema com o servidor!")
        })
}

export {
    deleteItemFromCart,
    updateItemQuantity,
}