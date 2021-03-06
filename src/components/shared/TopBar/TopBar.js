import {
    TopBarContainer,
    MenuButton,
    Title,
    ProfileButton,
    SearchBar,
    SearchButton,
    CartButton,
    CartNumber,
    SearchInput,
    Buttons,
    MainBar,
    MenuBar,
    ProfileMenuOptions,
    ProfileMenuArrow,
    CategoriesSubBar,
    SideMenu,
    LoginSideBarOptions
} from "./TopBarStyle";
import { FiShoppingCart, FiMenu} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import BlankSpace from "../BlankSpace";
import { searchForItemsByName, userLogOut, searchForNewItems, searchForItemsByCategory} from "./TopBarFunctions";
import { TextLoading } from "../Loadings";
import FiltersContext from "../../../contexts/filtersContext";
import CartContext from '../../../contexts/cartContext';
import api from "../../../services/api";

export default function TopBar() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const { filtersData } = useContext(FiltersContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategorySubBarOpen, setIsCategorySubBarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState("");
    const { cart, setCart } = useContext(CartContext);

    const visitorsMobileOptions = [
        { title: "Meu carrinho", onClick: () =>closeMenusAndNavigate(() => navigate('/my-cart')) },
        {title: "Entre", onClick: () =>closeMenusAndNavigate( () => navigate("/signin"))},
        {title: "Cadastre-se", onClick: () =>closeMenusAndNavigate( () => navigate("/signup"))}
    ]
    
    const profileMenuOptions = [
        { title: "Meu carrinho", onClick: () =>closeMenusAndNavigate(() => navigate('/my-cart')) },
        { title: "Minhas compras", onClick: () =>closeMenusAndNavigate(() => navigate('/my-purchases')) },
        { title: "Sair", onClick: () => {userLogOut(userData.token, setIsLoading, setUserData, setCart, setIsMenuOpen, navigate)}},
    ]
    const categoriesOptions = [
        { name: 'Novidades', onClick: () =>closeMenusAndNavigate( () => searchForNewItems(navigate)) },
        { name: 'Moda Masculina', onClick: () =>closeMenusAndNavigate( () => searchForItemsByCategory("Moda Masculina", navigate)) },
        { name: 'Moda Feminina', onClick: () =>closeMenusAndNavigate( () => searchForItemsByCategory("Moda Feminina", navigate)) },
        { name: 'Infantil', onClick: () =>closeMenusAndNavigate( () => searchForItemsByCategory("Infantil", navigate)) },
        { name: 'Outras Categorias', onClick: () =>closeMenusAndNavigate( () => setIsCategorySubBarOpen(!isCategorySubBarOpen)) }
    ];
    const otherCategoriesNames = filtersData.categories.filter((newCategory) => !categoriesOptions.find(({ name }) => name === newCategory));
    const otherCategoriesArray = otherCategoriesNames.map( (categoryName) => 
        {
            return {
                name: categoryName,
                onClick: () => {closeMenusAndNavigate( () => searchForItemsByCategory(categoryName, navigate))}
            }
        }
    )

    function closeMenusAndNavigate(searchAndNavigate) {
        setIsMenuOpen(false)
        setIsCategorySubBarOpen(false);
        searchAndNavigate();
    }

    useEffect(() => {
        if (userData.userId) {
            api.getCartItems({ userId: userData.userId })
                .then(res => {
                    setCart(res.data)
                    localStorage.setItem('farrapo-cart', JSON.stringify(res.data))
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            api.getCartItems({ visitorToken: userData.visitorToken })
            .then(res => {
                setCart(res.data)
                localStorage.setItem('farrapo-cart', JSON.stringify(res.data))
            })
            .catch(err => {
                console.log(err);
            });
        }
    },[])

    return (
        <>
            <BlankSpace isShown={isCategorySubBarOpen} onClick={() => setIsCategorySubBarOpen(false) } />
            <BlankSpace isShown={isMenuOpen} onClick={() => { if (!isLoading) { setIsMenuOpen(!isMenuOpen) } }} />
            <TopBarContainer>
                <Title onClick={() => navigate('/')} >
                    Farrapo Store
                </Title>
                <MainBar>
                    <MenuButton onClick={() => setIsCategorySubBarOpen(true)}>
                        <FiMenu />
                    </MenuButton>
                    <form onSubmit={(e) => searchForItemsByName(e, searchBarValue, setSearchBarValue, navigate)}>
                        <SearchBar>
                            <SearchInput value={searchBarValue} onChange={ (e) => setSearchBarValue(e.target.value)} />
                            <SearchButton type = "submit">
                                <AiOutlineSearch />
                            </SearchButton>
                        </SearchBar>
                    </form>
                    <Buttons>
                        <CartButton onClick={() => navigate("/my-cart")}>
                            <FiShoppingCart />
                            {
                                !cart.length ? '' :
                                <CartNumber>
                                    {cart.length}
                                </CartNumber>
                            }             
                        </CartButton>
                        {userData.name ?
                            <ProfileButton isOpened = {isMenuOpen} onClick = {() => setIsMenuOpen(!isMenuOpen)}>
                                {userData.image ? 
                                    <img alt="User profile" src={userData.image} />
                                : <HiOutlineUserCircle />}
                                <ProfileMenuArrow isOpened = {isMenuOpen}/>
                            </ProfileButton>
                        :
                            <ProfileButton onClick = {() => navigate('/signin')}>
                                    <HiOutlineUserCircle />
                                    <span>Entre ou <br /> Cadastre-se</span>    
                            </ProfileButton>
                        }
                    </Buttons>
                </MainBar>
                <MenuBar>
                    {categoriesOptions.map( ({name, onClick}, index) =>
                        <span
                            key={index}
                            onClick = {onClick}
                        > {name} </span>
                    )}
                </MenuBar>
            </TopBarContainer>
            {userData.name ?
                <ProfileMenuOptions isOpened={isMenuOpen}>
                    {isLoading ?
                        TextLoading()
                        :
                        profileMenuOptions.map(({ title, onClick }, index) => (
                            <span key={"profileMenu" + index} onClick={onClick}>{title}</span>
                        ))
                    }
                </ProfileMenuOptions>
                : ""
            }
            <CategoriesSubBar isShown={isCategorySubBarOpen} >
                {otherCategoriesArray.map( ({name, onClick}, index) =>
                    <span
                        key={index}
                        onClick = {onClick}
                    > {name} </span>
                )}
            </CategoriesSubBar>
            <SideMenu isShown={isCategorySubBarOpen}>
                {
                    categoriesOptions.slice(0, 4).concat(otherCategoriesArray).map(({name, onClick}) => (
                        <span onClick={onClick} > {name} </span>
                    ))
                }
                <LoginSideBarOptions>
                    {userData.name ?
                        profileMenuOptions.map(({ title, onClick }) => (
                            <span onClick={onClick}>
                                {title}
                            </span>
                        ))
                        :
                        visitorsMobileOptions.map(({ title, onClick }) => (
                            <span onClick={onClick}>
                                {title}
                            </span>
                        ))
                    }

                </LoginSideBarOptions>
            </SideMenu>
        </>
    );
}