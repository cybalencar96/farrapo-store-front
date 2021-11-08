import { HomeContainer } from './HomePageStyle';
import Menu from '../../shared/HomePageMenu/HomePageMenu';
import { useEffect, useState } from 'react';
import {mockMenu} from "../../../mocks/mockItens";

export default function HomePage() {

    const [menus, setMenus] = useState(mockMenu);

    useEffect(() => {
        //getMenus();
    },[]);

    if (menus.length === 0) {
        return (
        <HomeContainer>

        </HomeContainer>
        );
    }

    return (
        <HomeContainer>
            {menus.map( ({title, forwardMessage, itens}, index) => (
                <Menu
                    key={index}
                    title={title}
                    forwardMessage={forwardMessage}
                    itens = {itens}
                />
            ))}
        </HomeContainer>
    )
}