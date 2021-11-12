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

function checkExistingFilters(rawFilters, filtersData) {
    const filtersToCompare = {
        categories: filtersData.categories.map(category => category.toLowerCase()),
        colors: filtersData.colors.map(color => color.toLowerCase()),
        sizes: filtersData.sizes.map(size => size.toLowerCase()),
        prices: ["Até R$30,00", "Até R$40,00", "Até R$50,00", "Até R$60,00", "Até R$70,00", "Até R$80,00"],
        orderBy: ["menor-preco", "mais-recente", "maior-preco", "menos-recente"]
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

function getFiltersFromParams(params, filtersData) {
    const rawFilters = {
        searchedName: params.itemName !== "---" ? params.itemName : "",
        categories: params.categories.replace("---", "").replace("-", " ").split("+"),
        colors: params.colors.replace("---", "").replace("-", " ").split("+"),
        sizes: params.sizes.replace("---", "").replace("-", " ").split("+"),
        price: params.price !== "---" ? `Até R$${params.price},00` : "",
        orderBy: params.orderBy !== "---" ? params.orderBy : "",
    };
    return checkExistingFilters(rawFilters, filtersData);
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

export {
    toggleFilterBox,
    getFiltersFromParams,
    getArrayOfFilters,
}