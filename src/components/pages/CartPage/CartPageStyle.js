import styled from "styled-components";

const CartPageContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 120px max(calc((100vw - 1300px) /2 ), 20px) 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
`;

const CartTitle = styled.span`
    font-size: 60px;
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #08B2AE;
    margin-bottom: 20px;
`
const ItemBox = styled.div`
    width: 100%;
    height: 200px;
    padding: 0px 40px;
    border: 1px solid #CDCDCD;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    & img {
        height: 150px;
        width: 150px;
        object-fit: contain;
        margin-right: 40px;
        cursor: pointer;
        &:hover {
            filter: brightness(0.95);
        }
    }
    @media(max-width: 950px) {
        & img {
            height: 120px;
            width: 120px;
            margin-right: 15px;
        }
    }
    @media(max-width: 600px) {
        & img {
            height: 100px;
            width: 100px;
            margin-right: 8px;
        }
    }
`;

const CartItemDescription = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ItemName = styled.span`
    font-size: 24px;
    color: #08B2AE;
    width: 100%;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
    }
`;

const CartPrice = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #08B2AE;
    white-space: nowrap;
`;

const DeleteButton = styled.button`
    width: 100%;
    text-align:left;
    padding-left: 40px;
    font-size: 16px;
    color: #08B2AE;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
    }
`;

const ItemQuantityBox = styled.div`
    width: 100px;
    height: 30px;
    margin: 30px 0px 10px;
    white-space:nowrap;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const QuantityButton = styled.button`
    width: 30px;
    height: 100%;
    background-color: ${ ({isNotAllowed}) => isNotAllowed ? "#CDCDCD" : "#38C2BF"};
    border-radius: 0px 10px 10px 0px;
    color: #FFFFFF;
    font-size: 20px;
    cursor: ${ ({ isNotAllowed }) => isNotAllowed ? "not-allowed" : "pointer"};
    &:first-of-type {
        border-radius: 10px 0px 0px 10px;
    }
`;

const MaxQuantityDescription = styled.span`
    color: #ABABAB;
    font-size: 16px;
    margin-bottom: 24px;
`;

const TotalPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 32px;
    color: #08B2AE;
    white-space: nowrap;
    margin-bottom: 20px;
`;

const CheckOutButton = styled.button`
    width: 200px;
    min-height: 40px;
    background-color: #38C2BF;
    margin-bottom: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
    }
`;

export {
    CartPageContainer,
    CartTitle,
    ItemBox,
    CartItemDescription,
    ItemName,
    CartPrice,
    DeleteButton,
    ItemQuantityBox,
    MaxQuantityDescription,
    TotalPrice,
    CheckOutButton,
    QuantityButton,
}