function numberToCurrency(number) {
    return `R$ ${number.toFixed(2).replace(".",",")}`
}

export {
    numberToCurrency
}