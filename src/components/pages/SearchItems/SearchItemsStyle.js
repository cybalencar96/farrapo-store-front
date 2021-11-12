import styled from "styled-components";

import { IoMdClose } from "react-icons/io";

const SearchItemsContainer = styled.main`
    width: 100%;
    height: 100vh;
    padding: 100px max(calc((100vw - 1300px) /2 ), 20px) 0px;
`;

const FiltersBar = styled.nav`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #38C2BF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
        display: flex;
        align-items: center;
    }
`
const SingleFilterBox = styled.div`
    margin-left: 30px;
    position: relative;
    &:first-of-type{
        margin-left: 0px;
    }
`;

const ClosedFilterBox = styled.div`
    height: 30px;
    padding: 0px 10px;
    border: 1px solid #38C2BF;
    color: #08B2AE;
    cursor: pointer;
    background-color: ${ ({ isActive }) => isActive ? "rgba(56,194,191,0.35)" : "#FFFFFF"};
    display: flex;
    align-items: center;
    text-transform: lowercase;
    transition: all 250ms;
    & svg {
        margin-left: 10px;
        transform: ${ ({ isActive }) => isActive ? "rotate(180deg)" : "rotate(0deg)"};
        transition: all 250ms;
    }
`;

const UserFiltersBar = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`;

const SingleUsedFilter = styled.div`
    max-width: 200px;
    height: 20px;
    margin-left: 15px;
    padding: 0px 10px;
    font-size: 12px;
    color: #08B2AE;
    border: 1px solid #08B2AE;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    &:first-of-type {
        margin-left: 0px;
    }
`;

const CloseButton = styled(IoMdClose)`
    font-size: 14px;
    margin-left: 6px;
    cursor: pointer;
    color: #08B2AE;
`;


const ItemBoxes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px; 
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
    position: relative;
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
    width: 85%;
    height: 40px;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #08B2AE;
    text-align:right;
    @media(max-width: 600px) {
        margin-top: 30px;
        height: calc(15vw);
        font-size: calc(7vw);
    }
`;

const ItemSize = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #08B2AE;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    bottom: 12px;
    left: 12px;
`;

const OptionsBox = styled.div`
    border: 1px solid #08B2AE;
    border-radius: 0px 10px 10px 10px;
    padding: 30px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 30px;
    z-index: 1;
    background-color: #FFFFFF;
    & div {
        width: 100%;
        font-size: 18px;
        color: #08B2AE;
        margin-bottom: 20px;
        white-space: nowrap;
        & input {
            margin-right: 8px;
            cursor: pointer;
        }
        & span {
            width: 100%;
            text-align: center;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const ApplyButton = styled.button`
    padding: 6px;
    margin-bottom: 15px;
    background-color: #08B2AE;
    color: #FFFFFF;
    cursor: pointer;
`;

export {
    SearchItemsContainer,
    FiltersBar,
    SingleFilterBox,
    ClosedFilterBox,
    UserFiltersBar,
    SingleUsedFilter,
    CloseButton,
    ItemBoxes,
    ItemBox,
    ItemTitle,
    ItemPrice,
    ItemSize,
    OptionsBox,
    ApplyButton,
}