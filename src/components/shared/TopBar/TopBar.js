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
    CategoriesSubBar
} from "./TopBarStyle";
import { FiShoppingCart, FiMenu} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import BlankSpace from "../BlankSpace";
import { searchForItemsByName, userLogOut, searchForNewItems, searchForItemsByCategory} from "./TopBarFunctions";
import { TextLoading } from "../Loadings";
import FiltersContext from "../../../contexts/filtersContext";

export default function TopBar() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const { filtersData } = useContext(FiltersContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategorySubBarOpen, setIsCategorySubBarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState("");
    const profileMenuOptions = [
        { title: "Minhas compras", onClick: () => console.log("To be implemented") },
        { title: "Sair", onClick: () => { userLogOut(userData.token, setIsLoading, setUserData, setIsMenuOpen, navigate) } },
    ]
    const categoriesOptions = [
        { name: 'Novidades', onClick: () => searchForNewItems(navigate) },
        { name: 'Moda Masculina', onClick: () => searchForItemsByCategory("Moda Masculina", navigate) },
        { name: 'Moda Feminina', onClick: () => searchForItemsByCategory("Moda Feminina", navigate) },
        { name: 'Infantil', onClick: () => searchForItemsByCategory("Infantil", navigate) },
        { name: 'Outras Categorias', onClick: () => setIsCategorySubBarOpen(!isCategorySubBarOpen) }
    ];
    const otherCategoriesNames = filtersData.categories.filter((newCategory) => !categoriesOptions.find(({ name }) => name === newCategory));
    const otherCategoriesArray = otherCategoriesNames.map( (categoryName) => 
    {
        return {
            name: categoryName,
            onClick: () => {
                setIsCategorySubBarOpen(false);
                searchForItemsByCategory(categoryName, navigate);
            }
        }
    }
    )

    return (
        <>
            <BlankSpace isShown={isCategorySubBarOpen} onClick={() => setIsCategorySubBarOpen(false) } />
            <BlankSpace isShown={isMenuOpen} onClick={() => { if (!isLoading) { setIsMenuOpen(!isMenuOpen) } }} />
            <TopBarContainer>
                <Title onClick={() => navigate('/')} >
                    Farrapo Store
                </Title>
                <MainBar>
                    <MenuButton>
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
                        <CartButton>
                            <FiShoppingCart />
                            <CartNumber>
                                0
                            </CartNumber>
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
        </>
    );
}