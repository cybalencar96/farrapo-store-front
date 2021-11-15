import styled from "styled-components";

const ItemBoxContainer = styled.div`
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
        padding: 0px;
        & img {
            height: 120px;
            width: 120px;
            margin-right: 15px;
        }
    }
    @media(max-width: 600px) {
        padding: 0px 10px;
        & img {
            height: 100px;
            width: 100px;
            margin-right: 8px;
        }
    }
`;

const CartItemDescription = styled.div`
    width: calc(100% - 190px - 200px);
    height: 100%;
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 950px) {
        width: calc(100% - 120px - 150px);
        font-size: 26px;
    }

    @media(max-width: 600px) {
        width: calc(100% - 100px - 100px);
        font-size: 26px;
    }
`;

const ItemName = styled.span`
    font-size: 24px;
    color: #08B2AE;
    width: 100%;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
    }
    @media(max-width: 950px) {
        font-size: 20px;
    }

    @media(max-width: 600px) {
        font-size: 16px;
    }
`;

const CartPrice = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #08B2AE;
    white-space: nowrap;

    @media(max-width: 950px) {
        width: 150px;
        font-size: 26px;
    }

    @media(max-width: 600px) {
        width: 100px;
        font-size: 20px;
    }
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

    @media(max-width: 950px) {
        padding-left: 40px;
    }

    @media(max-width: 600px) {
        padding-left: 40px;
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

    @media(max-width: 600px) {
        width: 80px;
        height: 20px;
        margin: 50px 0px 10px;
        border-radius: 10px;
    }
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

    @media(max-width: 600px) {
        width: 20px;
        border-radius: 0px 5px 5px 0px;
        &:first-of-type {
            border-radius: 5px 0px 0px 5px;
        }
    }
`;

const MaxQuantityDescription = styled.span`
    color: #ABABAB;
    font-size: 16px;
    margin-bottom: 24px;

    @media(max-width: 600px) {
        font-size: 14px;
        margin-bottom: 16px;
    }
`;

const CheckoutDescription = styled.span`
    width: 100%;
    color: #ABABAB;
    font-size: 16px;
    margin-top: 24px;

    @media(max-width: 600px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;

export {
    ItemBoxContainer,
    CartItemDescription,
    ItemName,
    ItemQuantityBox,
    QuantityButton,
    MaxQuantityDescription,
    DeleteButton,
    CartPrice,
    CheckoutDescription,
}