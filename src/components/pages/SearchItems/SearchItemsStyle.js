import styled from "styled-components";

import { IoMdClose } from "react-icons/io";

const SearchItemsContainer = styled.main`
    width: 100%;
    height: 100vh;
    padding: 100px max(calc((100vw - 1300px) /2 ), 20px) 0px;
    white-space: nowrap;
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
    @media(max-width: 950px) {
        padding: 15px;
        justify-content: center;
        flex-wrap: wrap;
        height: max-content;
        & > div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
    @media(max-width: 600px) {
        & > div {
            flex-direction: column;
        }
    }
`

const UserFiltersBar = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    @media(max-width: 600px) {
        overflow-x: scroll;
    }
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

const ClearAllFilters = styled.span`
    margin-left: 30px;
    font-size: 16px;
    color: #08B2AE;
    cursor: pointer;
    text-decoration: underline;
    text-transform: lowercase;
    @media(max-width: 950px) {
        margin: 0px 30px 15px;
    }
`;

const NoItemsMessage = styled.div`
    width: 100%;
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
    color: #08B2AE;
    cursor: pointer;
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
    @media(max-width: 950px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
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
        width: calc( 100vw - 130px );
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
    NoItemsMessage,
    ClearAllFilters,
}