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
} from "./TopBarStyle";
import { FiShoppingCart, FiMenu} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
    const navigate = useNavigate();
    const menuOptions = ['Novidades', 'Moda Masculina', 'Moda Feminina', 'Infantil', 'Outras Categorias'];

    return (
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
                            0
                        </CartNumber>
                    </CartButton>
                    <ProfileButton onClick = {() => navigate('/signin')}>
                            <HiOutlineUserCircle />
                            <span>Entre ou <br /> Cadastre-se</span>    
                    </ProfileButton>
                </Buttons>
            </MainBar>
            <MenuBar>
                {menuOptions.map( (option, index) =>
                    <span key = {index}> {option} </span>
                )}
            </MenuBar>
        </TopBarContainer>
    );
}