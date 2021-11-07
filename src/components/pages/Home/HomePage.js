import {
    HomeContainer, MenuContainer, ItemBox, ItemBoxes, ItemTitle, ItemPrice, MenuTopBar, ScrollLeftButton, ScrollRightButton,
} from './HomePageStyle';
import { mockItens } from '../../../mocks/mockItens';
import { numberToCurrency } from '../../../utils/currencyUtils';
import { useRef } from 'react';
import { scrollHorizontally } from './HomePageFunctions';

export default function HomePage() {

    return (
        <HomeContainer>
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
        </HomeContainer>
    )
}

function Menu() {
    const divMenuRef = useRef();


    return (
        <MenuContainer>
            <MenuTopBar>
                Até R$60,00
                <button> {"Dar uma olhada!!"} </button>
            </MenuTopBar>
            <ScrollLeftButton onClick={ (e) => scrollHorizontally(e, divMenuRef, "left", 220) }/>
            <ItemBoxes ref={divMenuRef}>
            {mockItens.map(( {image, name, price}, index) => (
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