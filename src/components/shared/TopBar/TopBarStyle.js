import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

const TopBarContainer = styled.section`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    background-color: #38C2BF;
    padding: 0px max(calc((100vw - 1300px) /2 ), 20px);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width: 950px) {
        padding-top: 60px;

    }
`;

const Title = styled.span`
    width: min(400px, 100%);
    font-family: 'Cinzel', serif;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    color: #FFFFFF;
    position: fixed;
    top: calc(( 70px - 45px) / 2 );
    left: calc( (100vw - 400px) / 2 );

    @media(max-width: 950px) {
        font-size: 35px;
        top: calc(( 45px - 35px) / 2 );
        left: calc( (100vw - min(400px, 100%)) / 2 );
    }
    @media(max-width: 300px) {
        font-size: 25px;
    }   
`;

const MenuButton = styled.span`
    display: none;
    font-size: 35px;
    cursor: pointer;
    color: #FFFFFF;
    margin-top: 10px;
    margin-right: 10px;

    @media(max-width: 950px) {
    display: block;
    }   
`;

const SearchBar = styled.div`
    width: min(250px, 100%);
    height: 40px;
    border: 1px solid rgba(0,0,0,0.2);
    background-color: rgba(255,255,255,0.6);
    border-radius: 15px;
    display: flex;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    background-color: rgba(255,255,255,0.6);
    padding-left: 20px;
    border: none;
    border-radius: 15px 0px 0px 15px ;
    font-size: 16px;
    color: #333333;
`;

const SearchButton = styled.button`
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    color: #08B2AE;
    border-left: 1px solid rgba(0,0,0,0.2);
`

const Buttons = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 600px) {
        display: none;
    } 
`;

const CartButton = styled.button`
    width: 50px;
    height: 70px;
    display: flex;
    margin-right: 25px;
    align-items: center;
    justify-content: right;
    font-size: 40px;
    color: #FFFFFF;
    position: relative;
    cursor: pointer;
`;

const CartNumber = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 3;
    left: 0px;
    bottom: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    color: #38C2BF;
    font-size: 20px;
    line-height: normal;
    font-weight: 700;
`;

const ProfileButton = styled.div`
    //width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
    font-size: 45px;
    color: #FFFFFF;
    cursor: pointer;
    & span {
        margin-left: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
    }
    & img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const ProfileMenuArrow = styled(AiOutlineDown)`
    margin-left: 8px;
    font-size: 24px;
    transform: ${ ({ isOpened }) => isOpened ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 400ms;
`;

const MenuBar = styled.div`
    width: 100%;
    padding: 0px 15%;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    & span {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    @media(max-width: 950px) {
        display: none;
    }
`;

const ProfileMenuOptions = styled.div`
    width: 180px;
    position: fixed;
    top: 62px;
    right: max(calc((100vw - 1300px) /2 ), 20px);
    padding: 10px 12px 0px;
    z-index: 5;
    background-color: #FFFFFF;
    border: 1px solid #CDCDCD;
    border-radius: 0px 10px 10px 10px;
    display: ${ ({isOpened}) => isOpened ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    & span {
        margin-bottom: 10px;
        cursor: pointer;
        color: #08B2AE;
        font-size: 16px;
    }
`;

const CategoriesSubBar = styled.div`
    width: 180px;
    background-color: #FFFFFF;
    padding: 24px;
    display: ${ ({ isShown }) => isShown ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: calc((( 100% - (max(calc((100vw - 1300px) /2 ), 20px) * 2)) * 0.15 ) + max(calc((100vw - 1300px) /2 ), 20px) - 10px);
    top: 100px;
    z-index: 5;
    border: 1px solid #000000;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    & span {
        font-size: 20px;
        color: #08B2AE;
        cursor: pointer;
        margin-bottom: 18px;
        &:hover {
            text-decoration: underline;
        }
    }
    @media(max-width: 950px) {
        display: none;
    }
`;

const SideMenu = styled.section`
    width: 300px;
    height: calc(100vh - 100px);
    border-right: 1px solid #CDCDCD;
    position: fixed;
    top: 100px;
    left: ${ ({ isShown }) => isShown ? "0px" : "-300px"};
    z-index: 5;
    background-color: #08B2AE;
    color: #FFFFFF;
    font-size: 24px;
    display: none;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    cursor: pointer;
    transition: left 300ms;

    & span {
        margin-top: 16px;
    }

    @media(max-width: 950px) {
        display: flex;
    }
`;

const LoginSideBarOptions = styled.div`
    width: 100%;
    margin-top: 40px;
    font-size: 18px;
    display: none;
    flex-direction: column;
    align-items: center;


    @media(max-width: 600px) {
        display: flex;
    }


`;

export {
    TopBarContainer,
    MainBar,
    MenuButton,
    Title,
    ProfileButton,
    SearchBar,
    SearchInput,
    SearchButton,
    CartButton,
    CartNumber,
    Buttons,
    MenuBar,
    ProfileMenuOptions,
    ProfileMenuArrow,
    CategoriesSubBar,
    SideMenu,
    LoginSideBarOptions,
};
