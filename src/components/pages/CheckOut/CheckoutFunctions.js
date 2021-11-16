import api from "../../../services/api";
import {sendErrorAlert, sendWarningAlert} from "../../../utils/SweetAlert";

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
        { message: "Insira um estado válido!", condition: validUFs.includes(inputValues["state"].toUpperCase()) }
    ]

    const error = conditions.find(({ condition }) => condition === false);
    if (error) {
        sendErrorAlert(error.message)
        return false;
    }
    return true;
}

function submitCheckout(e, inputValues, cart, token, navigate, setIsLoading) {
    e.preventDefault();
    if (!areAllInputsValid(inputValues)) {
        return 
    }
    setIsLoading(true);
    api.usersCheckout(inputValues, cart, token)
        .then(res => {
            setIsLoading(false);
            navigate(`/success/${res.data.token}`)
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
            sendErrorAlert("Parece que houve algum problema! Tente novamente mais tarde");
        })
}

export {
    forwardUserToLogin,
    changeInputValue,
    submitCheckout,
}