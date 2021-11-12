import { v4 as uuid } from 'uuid';
import { HomeContainer } from './HomePageStyle';
import Menu from '../../shared/HomePageMenu/HomePageMenu';
import { useContext, useEffect, useState } from 'react';
import api from '../../../services/api';
import { LoadingHomePage } from '../../shared/Loadings';
import UserDataContext from '../../../contexts/userDataContext';

export default function HomePage() {
    const { userData, setUserData } = useContext(UserDataContext);
    
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        setMenus([]);
        
        api.getHomepageItens(userData.token)
            .then(resp => {
                setMenus(resp.data);
            })
            .catch(err => console.log(err))
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