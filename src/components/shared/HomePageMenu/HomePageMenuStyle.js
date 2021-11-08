import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

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
        font-size: 24px;
        color: #08B2AE;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    @media(max-width: 600px) {
        font-size: 24px;
        justify-content: center;
        & button {
            display: none;
        }
    } 
`;

const ItemBoxes = styled.div`
    max-width: calc(100% - 90px);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 40px;
    scroll-behavior: smooth;
    @media(max-width: 600px) {
        overflow: scroll;
    } 
`;

const ItemBox = styled.div`
    min-width: 200px;
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
        height: 190px;
        width: 190px;
        object-fit: contain;
    }

    @media(max-width: 600px) {
        min-width: calc( 100vw - 130px );
        height: calc( (100vw - 130px) * 1.4);
        & img {
            height: calc( 100vw - 180px );
            width: calc( 100vw - 180px );
        }
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

    @media(max-width: 600px) {
        height: calc(15vw);
        font-size: calc(7vw);
    }
`;

const ItemPrice = styled.span`
    max-width: 80%;
    height: 40px;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #08B2AE;

    @media(max-width: 600px) {
        margin-top: 30px;
        height: calc(15vw);
        font-size: calc(7vw);
    }
`;

const ScrollLeftButton = styled(FiArrowLeftCircle)`
    font-size: 40px;
    color: #08B2AE;
    position: absolute;
    cursor: pointer;
    user-select: none;
    left: 0px;
    top: 190px;

    @media(max-width: 600px) {
        display: none;
    } 
`;

const ScrollRightButton = styled(FiArrowRightCircle)`
    font-size: 40px;
    color: #08B2AE;
    position: absolute;
    cursor: pointer;
    user-select: none;
    right: 0px;
    top: 190px;
    @media(max-width: 600px) {
        display: none;
    } 
`;

export {
    MenuContainer,
    MenuTopBar,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ScrollLeftButton,
    ScrollRightButton,
}