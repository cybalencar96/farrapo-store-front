import { useParams } from "react-router";
import {
    SearchItemsContainer,
    FiltersBar,
    UserFiltersBar,
    SingleUsedFilter,
    CloseButton,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ItemSize,
} from "./SearchItemsStyle";
import { LoadingHomePage as LoadingSearchPage } from "../../shared/Loadings";
import { toggleFilterBox, getFiltersFromParams, getArrayOfFilters } from "./SearchItemsFunction";
import { useContext, useEffect, useState } from "react";
import { SearchFilterBox, SearchOrderingBox } from "../../shared/SearchOptionBox/SearchOptionBox";
import FiltersContext from "../../../contexts/filtersContext";

export default function SearchItems() {
    const { filtersData } = useContext(FiltersContext);
    const prices = ["Até R$30,00", "Até R$40,00", "Até R$50,00", "Até R$60,00", "Até R$70,00", "Até R$80,00"];
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [menus, setMenus] = useState({ leftSide: [], rightSide: [] });
    const selectedFilters = getFiltersFromParams(useParams(), filtersData);
    const arrayOfFilters = getArrayOfFilters(selectedFilters);

    useEffect(() => {
        setMenus({
        leftSide: [
            { title: "Categorias", type:"check", isActive: false, options: filtersData.categories, selectedOptions:selectedFilters.categories, },
            { title: "Cores", type:"check", isActive: false, options: filtersData.colors, selectedOptions:selectedFilters.colors,},
            { title: "Tamanhos", type:"check", isActive: false, options: filtersData.sizes, selectedOptions:selectedFilters.sizes,},
            { title: "Preço", type:"radio", isActive: false, options: prices, selectedOptions:selectedFilters.price,},
        ],
        rightSide: [{
            title: "Ordenar por",
            isActive: false,
            options: ["Menor preço", "Mais recente", "Maior preço", "Menos recente"],
            selectedOption: selectedFilters.orderBy
        }]
    })
    },[filtersData])

    if (menus.leftSide[0]?.options.length === 0) {
        return (
            <SearchItemsContainer>
                <LoadingSearchPage />
            </SearchItemsContainer>
        );
    }

    return (
        <SearchItemsContainer>
            <FiltersBar>
                <div>
                    {menus.leftSide.map(({ title, type, isActive, options, selectedOptions }, index) => (
                        <SearchFilterBox
                            key = {"SearchFilterBoxLeft" + index}
                            title={title.toLowerCase()}
                            type = {type}
                            isActive={isActive}
                            options={options }
                            selectedOptions={selectedOptions}
                            boxOnClick={ () => toggleFilterBox(menus, "leftSide", setMenus, index) }
                        />
                    ))}
                </div>
                {menus.rightSide.map(({ title, isActive, options, selectedOption }, index) => (
                        <SearchOrderingBox
                            key = {"SearchFilterBoxRight" + index}
                            title={ title }
                            isActive={isActive}
                            options={options }
                            selectedOption={selectedOption}
                            boxOnClick={ () => toggleFilterBox(menus, "rightSide", setMenus, index) }
                        />
                    ))}                    
            </FiltersBar>
            <UserFiltersBar>
                {arrayOfFilters.map(({ type, name }, index) => (
                    <SingleUsedFilter
                        key = {"SingleUserFilter" + index}
                    >
                        {name} <CloseButton />
                    </SingleUsedFilter>
                )) }
            </UserFiltersBar>
            <ItemBoxes>
                {items.map((item, index) => (
                <ItemBox key = {"SearchItemBox" + index} onClick={() => console.log("Teste")}>
                    <ItemTitle> {"Teste"} </ItemTitle>
                    <img alt={"TESTE"} src={"image"} />
                    <ItemPrice> {"R$20,90"} </ItemPrice>
                    <ItemSize> M </ItemSize>
                </ItemBox>
                ))}
            </ItemBoxes>
        </SearchItemsContainer>
    );
}
