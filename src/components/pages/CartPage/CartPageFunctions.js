import { numberToCurrency } from "../../../utils/stringsUtils";
import { sendErrorAlert, sendConfirmAlert, sendWarningAlert} from "../../../utils/SweetAlert.js";
import { updateCart } from "../../../utils/localStorage";
import api from "../../../services/api";

function getTotalPrice(cart) {
    const totalPrice =  cart.map(({ price, cartQty, quantity }) => cartQty ? price * cartQty : price * quantity).reduce((firstValue, secondValue) => firstValue + secondValue);
    return numberToCurrency(totalPrice);
}

async function EmptyCart({ userData, setIsLoading, setCart }) {

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
    api.deleteClientCart ({ clientType, token })
        .then(res => {
            setIsLoading(false);
            updateCart([]);
            setCart([]);
        })
        .catch(err => {
            setIsLoading(false);
            sendErrorAlert("Oh não, parece que houve um problema com o servidor!")
        })
}

async function forwardUserToLogin(navigate) {
    await sendWarningAlert("Faça login antes de seguir para Checkout!");
    navigate("/signin");
}

function checkLoginAndForwardToCheckout(userData, navigate) {
    if (!userData.token) {
        return forwardUserToLogin(navigate);
    }
    return navigate("/checkout");
}

export {
    getTotalPrice,
    EmptyCart,
    checkLoginAndForwardToCheckout
}