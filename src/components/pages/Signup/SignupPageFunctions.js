import {
    sendErrorAlert,
    sendSuccessAlert
} from '../../../utils/SweetAlert'
import api from "../../../services/api"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!#=+.%*?&])[A-Za-z\d-@_$!#=+.%*?&]{8,20}$/;
const passwordErrMessage = 'Password must contain at least 8 characters long, 1 number, 1 upperCase and 1 special character.'
    
function signup(e, inputs, navigate, setButtonLoading) {
    e.preventDefault();
    setButtonLoading(true);

    if (!passwordRegex.test(inputs.password)) {
        setButtonLoading(false)
        return sendErrorAlert(passwordErrMessage)
    }

    if (inputs.password !== inputs.confirmPass) {
        setButtonLoading(false)
        return sendErrorAlert("password and confirmation must match")
    }

    api.signup({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        genderName: inputs.gender,
        birthDate: new Date(inputs.birthDate).getTime(),
        zipCode: inputs.zipCode,
        streetNumber: inputs.streetNumber,
        complement: inputs.complement,
        phone: inputs.phone,
        imageUrl: inputs.imageUrl,
    })
    .then(res => {
        sendSuccessAlert()
        navigate('/signin')
    })
    .catch(err => {
        setButtonLoading(false)
        switch (err.response.status) {
            case 409: sendErrorAlert('Email already exists. Please signin or try another one')
                break;
            case 400: sendErrorAlert(err.response.data)
                break;
            default: sendErrorAlert('Something went wrong!')
                break;
        }
    })
}

export {
    signup,
}