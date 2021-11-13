import { useNavigate, useParams } from "react-router";
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
import { toggleFilterBox, getFiltersFromParams, getArrayOfFilters, removeFilter, getSearchRoute } from "./SearchItemsFunction";
import { useContext, useEffect, useState } from "react";
import { SearchFilterBox, SearchOrderingBox } from "../../shared/SearchOptionBox/SearchOptionBox";
import FiltersContext from "../../../contexts/filtersContext";
import api from "../../../services/api";
import { numberToCurrency } from "../../../utils/stringsUtils";
import BlankSpace from "../../shared/BlankSpace";

export default function SearchItems() {
    const { filtersData } = useContext(FiltersContext);
    const prices = ["Até R$30,00", "Até R$40,00", "Até R$50,00", "Até R$60,00", "Até R$70,00", "Até R$80,00"];
    const orderByOptions = ["Menor preço", "Mais recente", "Maior preço", "Menos recente"];
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    const [menus, setMenus] = useState({ leftSide: [], rightSide: [] });
    const selectedFilters = getFiltersFromParams(useParams(), filtersData, prices, orderByOptions);
    const arrayOfFilters = getArrayOfFilters(selectedFilters);
    const navigate = useNavigate();

    useEffect(() => {
        if (filtersData.isUpdated) {
            setIsLoading(true);
            api.getSearchItems(getSearchRoute(selectedFilters))
                .then(res => {
                    setItems(res.data);
                    setIsLoading(false);
                });
            setMenus({
                leftSide: [
                    { title: "Categorias", filterType: "categories", buttonType:"check", isActive: false, options: filtersData.categories, },
                    { title: "Cores", filterType: "colors", buttonType:"check", isActive: false, options: filtersData.colors,},
                    { title: "Tamanhos", filterType: "sizes", buttonType:"check", isActive: false, options: filtersData.sizes,},
                    { title: "Preço", filterType: "price", buttonType:"radio", isActive: false, options: prices,},
                ],
                rightSide: [{
                    title: "Ordenar por",
                    filterType: "orderBy",
                    isActive: false,
                    options: ["Menor preço", "Mais recente", "Maior preço", "Menos recente"],
                    selectedOption: selectedFilters.orderBy
                }]
            })
        }
    },[filtersData, navigate])

    if (menus.leftSide[0]?.options.length === 0) {
        return (
            <SearchItemsContainer>
                <LoadingSearchPage />
            </SearchItemsContainer>
        );
    }

    return (
        <>
            <BlankSpace isShown={ isLoading } isLoading={true} isTransparent={true} />
            <SearchItemsContainer>
                <FiltersBar>
                    <div>
                        {menus.leftSide.map(({ title, filterType, buttonType, isActive, options }, index) => (
                            <SearchFilterBox
                                key = {"SearchFilterBoxLeft" + index}
                                title={title.toLowerCase()}
                                filterType = {filterType}
                                buttonType = {buttonType}
                                isActive={isActive}
                                options={options}
                                selectedFilters={selectedFilters}
                                boxOnClick={ () => toggleFilterBox(menus, "leftSide", setMenus, index) }
                            />
                        ))}
                    </div>
                    {menus.rightSide.map(({ title, filterType, isActive, options }, index) => (
                            <SearchOrderingBox
                                key = {"SearchFilterBoxRight" + index}
                                title={title}
                                filterType = {filterType}
                                isActive={isActive}
                                options={options }
                                selectedFilters={selectedFilters}
                                boxOnClick={ () => toggleFilterBox(menus, "rightSide", setMenus, index) }
                            />
                        ))}                    
                </FiltersBar>
                <UserFiltersBar>
                    {arrayOfFilters.map(({ type, name }, index) => (
                        <SingleUsedFilter
                            key = {"SingleUserFilter" + index}
                        >
                            {name} <CloseButton onClick={ () => removeFilter(selectedFilters, type, name, navigate)} />
                        </SingleUsedFilter>
                    )) }
                </UserFiltersBar>
                <ItemBoxes>
                    {items.map(({name, image, price, size}, index) => (
                    <ItemBox key = {"SearchItemBox" + index} onClick={() => console.log("Teste")}>
                        <ItemTitle> {name} </ItemTitle>
                        <img alt={name} src={image} />
                        <ItemPrice> {numberToCurrency(price)} </ItemPrice>
                        <ItemSize> {size} </ItemSize>
                    </ItemBox>
                    ))}
                </ItemBoxes>
                </SearchItemsContainer>
        </>
    );
}
