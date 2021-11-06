import {
    TopBarContainer,
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
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function TopBar() {
    return (
        <TopBarContainer>
            <MainBar>
                <SearchBar>
                    <SearchInput />
                    <SearchButton>
                        <AiOutlineSearch />
                    </SearchButton>
                </SearchBar>
                <Title> Farrapo Store </Title>
                <Buttons>
                <CartButton>
                    <FiShoppingCart />
                    <CartNumber>
                        2
                    </CartNumber>
                </CartButton>
                <ProfileButton>
                        <HiOutlineUserCircle />
                        <span>Entre ou <br /> Cadastre-se</span>    
                </ProfileButton>
                </Buttons>
            </MainBar>
            <MenuBar>
                <span> Novidades </span>
                <span> Moda Masculina </span>
                <span> Moda Feminina </span>
                <span> Infantil </span>
                <span> Outras Categorias </span>
            </MenuBar>
        </TopBarContainer>
    );
}