import { useRef } from "react";
import {
    MenuContainer,
    MenuTopBar,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ScrollLeftButton,
    ScrollRightButton,
} from "./HomePageMenuStyle";
import { scrollHorizontally } from "./HomePageMenuFunctions";
import { numberToCurrency } from "../../../utils/currencyUtils";

export default function Menu({title, forwardMessage, itens}) {
    const divMenuRef = useRef();

    return (
        <MenuContainer>
            <MenuTopBar>
                {title}
                <button> {forwardMessage} </button>
            </MenuTopBar>
            <ScrollLeftButton onClick={ (e) => scrollHorizontally(e, divMenuRef, "left", 220) }/>
            <ItemBoxes ref={divMenuRef}>
            {itens.map(( {image, name, price}, index) => (
                <ItemBox key={index} >
                    <ItemTitle> {name} </ItemTitle>
                    <img alt={name} src={image} />
                    <ItemPrice> {numberToCurrency(price)} </ItemPrice>
                </ItemBox>
            ))}
            </ItemBoxes>
            <ScrollRightButton onClick={ (e) => scrollHorizontally(e, divMenuRef, "right", 220) } />
        </MenuContainer>
    );
}