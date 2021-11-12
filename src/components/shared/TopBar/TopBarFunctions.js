import api from "../../../services/api";
import { removeSpecialCharacters } from "../../../utils/stringsUtils";
import {sendErrorAlert} from "../../../utils/SweetAlert";
import { getSearchRoute } from "../../pages/SearchItems/SearchItemsFunction";

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