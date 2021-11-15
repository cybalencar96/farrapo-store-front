import { numberToCurrency } from "../../../utils/stringsUtils";
import { sendErrorAlert, sendConfirmAlert} from "../../../utils/SweetAlert.js";
import { updateCart } from "../../../utils/localStorage";
import api from "../../../services/api";

function getTotalPrice(cart) {
    const totalPrice =  cart.map(({ price, cartQty }) => price * cartQty).reduce((firstValue, secondValue) => firstValue + secondValue);
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

export {
    getTotalPrice,
    EmptyCart,
}