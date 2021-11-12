import api from "../../../services/api";
import {sendErrorAlert} from "../../../utils/SweetAlert";

function userLogOut(token, setIsLoading, setUserData, setIsMenuOpen, navigate) {
    setIsLoading(true);
    api.logout(token)
    .then(res => {
        setUserData({
            id: "",
            name: "",
            email: "",
            token: "",
            image: ""
        });
        setIsMenuOpen(false);
        setIsLoading(false);
        navigate("/");
    })
    .catch(err => {
        setIsLoading(false);
        sendErrorAlert(err.response.data)
    });
}

export {
    userLogOut,
}