import api from "../../../services/api";
import { removeSpecialCharacters } from "../../../utils/stringsUtils";
import {sendErrorAlert} from "../../../utils/SweetAlert";
import { getSearchRoute } from "../../pages/SearchItems/SearchItemsFunction";
import { getUserData, getCartData } from '../../../utils/localStorage.js';

function userLogOut(token, setIsLoading, setUserData, setCart, setIsMenuOpen, navigate ) {
    setIsLoading(true);
    api.logout(token)
    .then(res => {
        localStorage.removeItem('farrapo');
        localStorage.removeItem('farrapo-cart');
        setUserData(getUserData());
        setCart(getCartData());
        setIsMenuOpen(false)
        setIsLoading(false);
        navigate('/');
    })
    .catch(err => {
        setIsLoading(false);
        sendErrorAlert(err.response.data)
    });
}

function searchForItemsByName(e, itemName, setSearchBarValue, navigate) {
    e.preventDefault();
    if (!itemName) {
        return;
    }
    const filtersObject = {
        searchedName: itemName,
        categories: [],
        colors: [],
        sizes: [],
        price: "",
        orderBy: ""
    }
    setSearchBarValue("");

    getSearchRoute(filtersObject, navigate);
}

function searchForItemsByCategory(category, navigate) {
    const adjustedCategory = removeSpecialCharacters(category).toLowerCase();

    const filtersObject = {
        searchedName: "",
        categories: [adjustedCategory],
        colors: [],
        sizes: [],
        price: "",
        orderBy: ""
    }

    getSearchRoute(filtersObject, navigate);
}

function searchForNewItems(navigate) {
    const filtersObject = {
        searchedName: "",
        categories: [],
        colors: [],
        sizes: [],
        price: "",
        orderBy: "mais recente"
    }
    getSearchRoute(filtersObject, navigate);
}


export {
    userLogOut,
    searchForItemsByName,
    searchForNewItems,
    searchForItemsByCategory,
}