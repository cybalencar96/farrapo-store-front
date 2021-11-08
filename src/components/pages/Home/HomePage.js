import { HomeContainer } from './HomePageStyle';
import Menu from '../../shared/HomePageMenu/HomePageMenu';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { LoadingHomePage } from '../../shared/Loadings';

export default function HomePage() {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        api.getHomepageItens()
            .then(resp => {
                setMenus(resp.data);
            })
            .catch(err => console.log(err));
    },[]);

    if (menus.length === 0) {
        return (
        <HomeContainer>
            <LoadingHomePage />
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