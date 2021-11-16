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

function signin(e, inputs, navigate, setButtonLoading, setUserData, userData) {
    e.preventDefault();
    setButtonLoading(true)

    api.signin(inputs)
        .then(res => {
        const userLogged = {
            userId: res.data.id,
            name: res.data.name,
            email: res.data.email,
            token: res.data.token,
            image: res.data.image,
            visitorToken: '',
            cart: userData.cart
        }

        api.transferCartFromVistantToUser({
            userId: userLogged.userId,
            visitorToken: userData.visitorToken
        })
        .then(resp => {
            setUserData(userLogged);
            localStorage.setItem('farrapo', JSON.stringify(userLogged));
    
            sendSuccessAlert();
            navigate('/');
        })
        .catch(error => {
            console.log(error.response)
        });

        
    })
    .catch(err => {
        setButtonLoading(false)
        console.log(err)
        if (err.response) sendErrorAlert(err.response.data)
    });
}

export {
    changeInputs,
    signin
}