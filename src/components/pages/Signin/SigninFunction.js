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

function signin(e, inputs, navigate, setButtonLoading, setUserData) {
    e.preventDefault();
    setButtonLoading(true)

    api.signin(inputs)
    .then(res => {
        setUserData({
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            token: res.data.token,
            image: res.data.image
        })
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