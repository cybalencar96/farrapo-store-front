import {sendErrorAlert, sendSuccessAlert, sendWarningAlert} from "../../../utils/SweetAlert";

async function forwardUserToLogin(navigate) {
    await sendWarningAlert("Faça login antes de seguir para Checkout!");
    navigate("/signin");
}

function changeInputValue(e, inputValues, setInputValues, atribute) {
    const newObject = { ...inputValues };
    newObject[atribute] = e.target.value;
    setInputValues(newObject)
}

function areAllInputsValid(inputValues) {
    const validUFs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "DO", "MA", "MT",
        "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RR", "SC", "SP", "SE", "TO"];
    const conditions = [
        { message: "Insira um nome válido!", condition: (inputValues["name"]).length > 3 },
        { message: "Insira um CPF válido!", condition: String(inputValues["cpf"]).length === 11 },
        { message: "Insira um endereço válido!", condition: (inputValues["adress"]).length > 3 },
        { message: "Insira uma cidade válida!", condition: (inputValues["city"]).length > 3 },
        { message: "Insira um estado válido!", condition: validUFs.includes(inputValues["state"]) }
    ]

    console.log((inputValues["name"]).length > 3);

    const error = conditions.find(({ condition }) => condition === false);
    if (error) {
        sendErrorAlert(error.message)
        return false;
    }
    return true;
}

function submitCheckout(e, inputValues, cart) {
    e.preventDefault();
    if (areAllInputsValid(inputValues)) {
        sendSuccessAlert("Deu bom!")
    }
}

export {
    forwardUserToLogin,
    changeInputValue,
    submitCheckout,
}