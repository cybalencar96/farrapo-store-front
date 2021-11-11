import { useParams } from "react-router";
import {
    SearchItemsContainer,
    FiltersBar,
    SingleFilterBox,
    ClosedFilterBox,
    UserFiltersBar,
    SingleUsedFilter,
    CloseButton,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ItemSize,
    OptionsBox,
} from "./SearchItemsStyle";
import { BsChevronDown } from "react-icons/bs";

export default function SearchItems() {
    const categories = ["Moda Feminina", "Moda Masculina", " Infantil", "Moda de Praia", "Acessórios", "Calçados", "Camisas", "Calças"];
    const colors = ["Branco", "Preto", "Azul", "Verde", "Marrom"];
    const sizes = ["P", "M", "G", "36", "37", "38"];
    const prices = ["Até R$30,00", "Até R$40,00", "Até R$50,00", "Até R$60,00", "Até R$70,00", "Até R$80,00"]
    const leftMenus = [
        { title: "categorias", isActive: true, options: categories },
        { title: "Cores", isActive: false, options: colors },
        { title: "Tamanhos", isActive: false, options: sizes },
        { title: "Preço", isActive: false, options: prices },
    ];
    const rightMenus = { title: "Ordenar por", isActive: false };
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const params = useParams();
    console.log(params);

    return (
        <SearchItemsContainer>
            <FiltersBar>
                <div>
                    {leftMenus.map(({ title, isActive, options }, index) => (
                        <SingleFilterBox key = {"SingleFilterBox" + index}>
                            <ClosedFilterBox isActive = {isActive}>
                                {title} <BsChevronDown />
                            </ClosedFilterBox>
                            {isActive ?
                                <OptionsBox>
                                    
                                </OptionsBox>
                            : ""}
                        </SingleFilterBox>
                    ))}
                </div>
                    <ClosedFilterBox isActive = {rightMenus.isActive}>
                            {rightMenus.title} <BsChevronDown />
                    </ClosedFilterBox>                      
            </FiltersBar>
            <UserFiltersBar>
                <SingleUsedFilter>
                    Calças <CloseButton />
                </SingleUsedFilter>
                <SingleUsedFilter>
                    Azul <CloseButton />
                </SingleUsedFilter>
                <SingleUsedFilter>
                    Moda feminina <CloseButton />
                </SingleUsedFilter>
            </UserFiltersBar>
            <ItemBoxes>
                {items.map((item, index) => (
                <ItemBox key = {"SearchItemBox" + index} >
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
