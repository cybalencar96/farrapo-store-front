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
} from "./TopBarStyle";
import { FiShoppingCart, FiMenu} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import BlankSpace from "../BlankSpace";
import { userLogOut } from "./TopBarFunctions";
import { TextLoading } from "../Loadings";

export default function TopBar() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const profileMenuOptions = [
        { title: "Minhas compras", onClick: "" },
        { title: "Sair", onClick: () => {userLogOut(userData.token, setIsLoading, setUserData, setIsMenuOpen)}},
    ]
    const categoriesOptions = ['Novidades', 'Moda Masculina', 'Moda Feminina', 'Infantil', 'Outras Categorias'];

    return (
        <>
            <BlankSpace isShown={isMenuOpen} onClick={() => {if (!isLoading) { setIsMenuOpen(!isMenuOpen) }}}/>
            <TopBarContainer>
                <Title onClick={() => navigate('/')} >
                    Farrapo Store
                </Title>
                <MainBar>
                    <MenuButton>
                        <FiMenu />
                    </MenuButton>
                    <SearchBar>
                        <SearchInput />
                        <SearchButton>
                            <AiOutlineSearch />
                        </SearchButton>
                    </SearchBar>
                    <Buttons>
                        <CartButton>
                            <FiShoppingCart />
                            <CartNumber>
                                {userData.cart.length ? userData.cart.length : ''}
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
                    {categoriesOptions.map( (option, index) =>
                        <span key = {index}> {option} </span>
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
                : ""}
        </>
    );
}