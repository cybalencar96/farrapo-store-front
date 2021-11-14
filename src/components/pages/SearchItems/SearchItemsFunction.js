import { removeSpecialCharacters } from "../../../utils/stringsUtils";

function toggleFilterBox(menus, side, setMenus, index) {
    const newMenus = { ...menus };
    if (newMenus[side][index].isActive) {
        newMenus[side][index].isActive = false;
    } else {
        newMenus["leftSide"].map((filter) => filter.isActive = false);
        newMenus["rightSide"].map((filter) => filter.isActive = false);
        newMenus[side][index].isActive = true;
    }
    setMenus(newMenus);
}


function routeToString(route, isPrice) {
    let string = route.replace("---", "").replace("-", " ")
    if (isPrice && string) {
        string = `Ate R$${string},00`
    }
    return string;
}

function stringToRoute(string) {
    let route = string ? string.toLowerCase() : "---";
    route = route.replace("ate r$", "").replace(",00", "");
    return route.replace(" ", "-");
}

function checkExistingFilters(rawFilters, filtersData, prices, orderByOptions) {
    const filtersToCompare = {
        categories: filtersData.categories.map(category => removeSpecialCharacters(category.toLowerCase())),
        colors: filtersData.colors.map(color => removeSpecialCharacters(color.toLowerCase())),
        sizes: filtersData.sizes.map(size => removeSpecialCharacters(size.toLowerCase())),
        prices: prices.map( priceDescription => removeSpecialCharacters(priceDescription) ),
        orderBy: orderByOptions.map(orderByOption => removeSpecialCharacters(orderByOption.toLowerCase()))
    }

    const existingFilters = {
        searchedName: rawFilters.searchedName,
        categories: rawFilters.categories.filter(rawCategory => filtersToCompare.categories.includes(rawCategory)),
        colors: rawFilters.colors.filter(rawColor => filtersToCompare.colors.includes(rawColor)),
        sizes: rawFilters.sizes.filter(rawSize => filtersToCompare.sizes.includes(rawSize)),
        price: filtersToCompare.prices.includes(rawFilters.price) ? rawFilters.price : "",
        orderBy: filtersToCompare.orderBy.includes(rawFilters.orderBy) ? rawFilters.orderBy : "",
    }
    return existingFilters;
}

function getFiltersFromParams(params, filtersData, prices, orderByOptions) {
    const rawFilters = {
        searchedName: routeToString(params.itemName),
        categories: routeToString(params.categories).split("+"),
        colors: routeToString(params.colors).split("+"),
        sizes: routeToString(params.sizes).split("+"),
        price: routeToString(params.price, "price"),
        orderBy: routeToString(params.orderBy),
    };
    return checkExistingFilters(rawFilters, filtersData, prices, orderByOptions);
}

function getArrayOfFilters(selectedFilters) {
    const entries = Object.entries(selectedFilters);
    const stringTypeEntries = ["searchedName", "price", "orderBy"];
    const arrayOfFilter = []
    entries.forEach( ([entryName, entryValue]) => {
        if (stringTypeEntries.includes(entryName)) {
            arrayOfFilter.push({ type: entryName, name: entryValue });
        } else {
            const transformedEntryValue = entryValue.map(entryInnerValue => { return { type: entryName, name: entryInnerValue } });
            arrayOfFilter.push(transformedEntryValue)
        }
    })
    return arrayOfFilter.flat().filter(({ type, name }) => name !== "" && type !== "orderBy");
}

function areFiltersTheSame(updatedFilter, existingFilter) {
    if (typeof (updatedFilter) === "string") {
        return removeSpecialCharacters(updatedFilter).toLowerCase() === removeSpecialCharacters(existingFilter).toLowerCase();
    }
    if (updatedFilter.length !== existingFilter.length) {
        return false;
    }
    for (let i = 0; i < updatedFilter.length; i++) {
        if (updatedFilter[i].toLowerCase() !== existingFilter[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

function getSearchRoute(updatedFilters, navigate) {

    let routeText = `/search/`;
    routeText += `${stringToRoute(updatedFilters.searchedName)}&`;
    routeText += `${stringToRoute(updatedFilters.categories.join("+"))}&`;
    routeText += `${stringToRoute(updatedFilters.colors.join("+"))}&`;
    routeText += `${stringToRoute(updatedFilters.sizes.join("+"))}&`;
    routeText += `${stringToRoute(updatedFilters.price)}&`;
    routeText += `${stringToRoute(updatedFilters.orderBy)}`;
    if (navigate) {
        return navigate(routeText);
    }

    return routeText
    }

function removeFilter(existingFilters, type, name, navigate) {
    const updatedFilters = { ...existingFilters };
    if (typeof (updatedFilters[type]) === "string") {
        updatedFilters[type] = "";
    } else {
        updatedFilters[type].splice(updatedFilters[type].indexOf(name), 1);
    }
    getSearchRoute(updatedFilters, navigate);
}

function updateFilters(filtersToBeApplied, existingFilters, navigate, toggleBox) {
    const updatedFilters = { ...existingFilters };

    updatedFilters[filtersToBeApplied.type] = typeof (filtersToBeApplied.names) === "string" ?
        removeSpecialCharacters(filtersToBeApplied.names).toLowerCase() :
        filtersToBeApplied.names.map(name => removeSpecialCharacters(name).toLowerCase())
    ;
    
    if (areFiltersTheSame(filtersToBeApplied.names, existingFilters[filtersToBeApplied.type])) {
        toggleBox();
        return
    }
    
    getSearchRoute(updatedFilters, navigate);
}

export {
    toggleFilterBox,
    getFiltersFromParams,
    getArrayOfFilters,
    updateFilters,
    getSearchRoute,
    removeFilter,
}