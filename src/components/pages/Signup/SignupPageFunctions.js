import {
    sendErrorAlert,
    sendSuccessAlert
} from '../../../utils/SweetAlert'
import api from "../../../services/api"

function changeInputs(e, inputs, setInputs) {
    const inputPlaceholder = e.target.placeholder;
    const inputValue = e.target.value;

    if (inputPlaceholder === 'name') {
        setInputs({
            ...inputs,
            name: inputValue
        })
    }
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

    if (inputPlaceholder === 'confirm password') {
        setInputs({
            ...inputs,
            confirmPass: inputValue
        })
    }

    if (inputPlaceholder === 'birth date') {
        setInputs({
            ...inputs,
            birthDate: inputValue
        })
    }

    if (inputPlaceholder === 'phone number') {
        setInputs({
            ...inputs,
            phone: inputValue
        })
    }

    if (inputPlaceholder === 'image perfil url') {
        setInputs({
            ...inputs,
            imageUrl: inputValue
        })
    }

    if ((inputPlaceholder + ' ' + inputValue) === 'male on') {
        setInputs({
            ...inputs,
            gender: 'male'
        })
    }

    if ((inputPlaceholder + ' ' + inputValue) === 'female on') {
        setInputs({
            ...inputs,
            gender: 'female'
        })
    }

    if ((inputPlaceholder + ' ' + inputValue) === 'not_said on') {
        setInputs({
            ...inputs,
            gender: 'not_said'
        })
    }

    if (inputPlaceholder === 'CEP') {
        setInputs({
            ...inputs,
            zipCode: inputValue
        })
    }

    if (inputPlaceholder === 'Número') {
        setInputs({
            ...inputs,
            streetNumber: inputValue
        })
    }

    if (inputPlaceholder === 'Complemento') {
        setInputs({
            ...inputs,
            complement: inputValue
        })
    }
}

function signup(e, inputs, navigate) {
    e.preventDefault();

    if (inputs.password !== inputs.confirmPass) {
        sendErrorAlert("password and confirmation must match")
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
    changeInputs,
    signup,
}