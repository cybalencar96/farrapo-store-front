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

const CartTopBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const EmptyMyCart = styled.span`
    font-size: 18px;
    color: #08B2AE;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
    }
    @media(max-width: 600px) {
        font-size: 14px;
    }
`;

const CartTitle = styled.span`
    font-size: 60px;
    color: #08B2AE;

    @media(max-width: 950px) {
        font-size: 40px;
    }

    @media(max-width: 600px) {
        font-size: 24px;
    }
`

const TotalPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 32px;
    color: #08B2AE;
    white-space: nowrap;
    margin-bottom: 20px;

    @media(max-width: 600px) {
        font-size: 24px;
    }
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

const EmptyCartMessage = styled.span`
    width: 100%;
    margin-top: 40px;
    color: #08B2AE;
    font-size: 36px;
    text-align: center;
    line-height: 60px;

    @media(max-width: 950px) {
        font-size: 28px;
    }

    @media(max-width: 600px) {
        font-size: 24px;
    }
`;

export {
    CartPageContainer,
    CartTitle,
    TotalPrice,
    CheckOutButton,
    EmptyCartMessage,
    CartTopBar,
    EmptyMyCart
}
