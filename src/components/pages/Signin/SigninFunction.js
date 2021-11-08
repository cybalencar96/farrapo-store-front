import {
    sendErrorAlert,
    sendSuccessAlert
} from '../../../utils/SweetAlert'
import api from "../../../services/api"

function changeInputs(e, inputs, setInputs) {
    const inputPlaceholder = e.target.placeholder;
    const inputValue = e.target.value;


    if (inputPlaceholder === 'email') {
        setInputs({
            ...inputs,
            email: inputValue
        })
    }
    if (inputPlaceholder === 'password') {
        setInputs({
            ...inputs,
            password: inputValue
        })
    }

}

function signin(e, inputs, navigate, setButtonLoading) {
    e.preventDefault();
    setButtonLoading(true)

    api.signin(inputs)
    .then(res => {
        sendSuccessAlert();
        navigate('/');
    })
    .catch(err => {
        setButtonLoading(false)
        sendErrorAlert(err.response.data)
    });
}

export {
    changeInputs,
    signin
}