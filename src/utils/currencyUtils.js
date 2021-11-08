function numberToCurrency(number) {
    return `R$ ${Number(number).toFixed(2).replace(".",",")}`
}

export {
    numberToCurrency
}