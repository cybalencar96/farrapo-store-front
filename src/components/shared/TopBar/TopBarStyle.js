import styled from "styled-components";

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
    width: 400px;
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
    left: calc( (100vw - 400px) / 2 );

    }   
`;

const MenuButton = styled.span`
    display: none;
    font-size: 35px;
    cursor: pointer;
    color: #FFFFFF;
    margin-top: 10px;

    @media(max-width: 950px) {
    display: block;
    }   
`;

const SearchBar = styled.div`
    width: 250px;
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
    justify-content: space-between;
    align-items: center;

    @media(max-width: 600px) {
        display: none;
    } 
`;

const CartButton = styled.button`
    width: 50px;
    height: 70px;
    display: flex;
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
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
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
    MenuBar
};
