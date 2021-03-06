import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import { scrollHorizontally, searchForItemsByType } from "./HomePageMenuFunctions";
import { numberToCurrency } from "../../../utils/stringsUtils";

export default function Menu({title, forwardMessage, type, itens}) {
    const divMenuRef = useRef();
    const navigate = useNavigate();
    return (
        <MenuContainer>
            <MenuTopBar>
                {title}
                <button
                    onClick = {() => searchForItemsByType(type, title, navigate)}
                > {forwardMessage} </button>
            </MenuTopBar>
            <ScrollLeftButton onClick={ (e) => scrollHorizontally(e, divMenuRef, "left", 220) }/>
            <ItemBoxes ref={divMenuRef}>
            {itens.map(( {id, image, name, price}, index) => (
                <ItemBox key={index} onClick={() => navigate(`/items/${id}`)}>
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