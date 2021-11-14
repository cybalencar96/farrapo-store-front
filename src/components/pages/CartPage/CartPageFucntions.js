import { numberToCurrency } from "../../../utils/stringsUtils";

function getTotalPrice(cart) {
    const totalPrice =  cart.map(({ price, cartQty }) => price * cartQty).reduce((firstValue, secondValue) => firstValue + secondValue);
    return numberToCurrency(totalPrice);
}

export {
    getTotalPrice,
}