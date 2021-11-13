import { removeSpecialCharacters } from "../../../utils/stringsUtils";
import { getSearchRoute } from "../../pages/SearchItems/SearchItemsFunction";

function scrollHorizontally(event, reference, side, amount) {
    event.preventDefault();
    if (side === "left") {
        reference.current.scrollLeft -= amount;
    } else {
        reference.current.scrollLeft += amount;
    }
}

function searchForItemsByType(type, title, navigate) {
    if (type === "price") return searchForItemsByMaximumPrice(title, navigate);
    if (type === "colors") return searchForItemsByColor(title, navigate);
    if (type === "categories") return searchForItemsByCategory(title, navigate);
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

function searchForItemsByColor(color, navigate) {
    let adjustedColor = color.replace("Que tal um pouco de ", "");
    adjustedColor = removeSpecialCharacters(adjustedColor).toLowerCase();
    
    const filtersObject = {
        searchedName: "",
        categories: [],
        colors: [adjustedColor],
        sizes: [],
        price: "",
        orderBy: ""
    }

    getSearchRoute(filtersObject, navigate);
}

function searchForItemsByMaximumPrice(price, navigate) {
    const adjustedPrice = price.replace("Até R$","").replace(",00","");
    
    const filtersObject = {
        searchedName: "",
        categories: [],
        colors: [],
        sizes: [],
        price: adjustedPrice,
        orderBy: ""
    }

    getSearchRoute(filtersObject, navigate);
}



export {
    scrollHorizontally,
    searchForItemsByType
}