import styled from "styled-components";


const CheckoutContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 120px max(calc((100vw - 1300px) /2 ), 20px) 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const CheckoutTopBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const CheckoutTitle = styled.span`
    font-size: 40px;
    color: #08B2AE;
    padding-left: 15px;

    @media(max-width: 950px) {
        font-size: 40px;
    }

    @media(max-width: 600px) {
        font-size: 24px;
    }
`

const GoBackToMyCart = styled.span`
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


export {
    CheckoutContainer,
    CheckoutTopBar,
    CheckoutTitle,
    GoBackToMyCart,
    TotalPrice,
}