import styled from 'styled-components';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    padding: 120px max(calc((100vw - 1300px) /2 ), 20px) 0px;

`

const MenuContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const MenuTopBar = styled.div`
    width: 100%;
    font-size: 40px;
    font-weight:700;
    color: #08B2AE;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #38C2BF;
    margin-bottom: 30px;
    & button {
        font-size: 30px;
        color: #08B2AE;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const ItemBoxes = styled.div`
    width: calc(100% - 90px);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 40px;
    scroll-behavior: smooth;
`;

const ItemBox = styled.div`
    width: 200px;
    height: 280px;
    margin-right: 24px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    border: 1px solid #CECECE;
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        filter: brightness(.95);
    }
    & img {
        height: 200px;
        width: 190px;
        object-fit: contain;
    }

`;

const ItemTitle = styled.span`
    max-width: 80%;
    height: 40px;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    color: #08B2AE;
`;

const ItemPrice = styled.span`
    max-width: 80%;
    height: 40px;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #08B2AE;
`;

const ScrollLeftButton = styled(FiArrowLeftCircle)`
    font-size: 40px;
    color: #08B2AE;
    position: absolute;
    cursor: pointer;
    user-select: none;
    left: 0px;
    top: 190px;
`;

const ScrollRightButton = styled(FiArrowRightCircle)`
    font-size: 40px;
    color: #08B2AE;
    position: absolute;
    cursor: pointer;
    user-select: none;
    right: 0px;
    top: 190px;
`;

export {
    HomeContainer,
    MenuContainer,
    MenuTopBar,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ScrollLeftButton,
    ScrollRightButton,
}