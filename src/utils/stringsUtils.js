function numberToCurrency(number) {
    return `R$ ${Number(number).toFixed(2).replace(".",",")}`
}

function removeSpecialCharacters(string) {
    const specialCharacters = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
    const charactersToReplace = "AEIOUaeiouaeiouaeiouCc";
    const arrayToBeJoined = [];
    string.split("").forEach(character => {
        if (specialCharacters.includes(character)) {
            const characterIndex = specialCharacters.indexOf(character);
            arrayToBeJoined.push(charactersToReplace[characterIndex]);
        } else {
            arrayToBeJoined.push(character)
        }
    })
    return arrayToBeJoined.join("");
}

export {
    numberToCurrency,
    removeSpecialCharacters,
}