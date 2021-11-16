import styled from "styled-components";

const CheckoutContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 120px max(calc((100vw - 1300px) /2 ), 20px) 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media(max-width: 600px) {
        padding: 120px 20px 40px;
    }
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

const CheckoutForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormTitle = styled.span`
    font-size: 24px;
    color: #08B2AE;
    display: inline-block;
    margin-bottom: 16px;
`;

const Inputs = styled.div`
    display: grid;
    grid-template-columns: (30%,70%);
    gap: 10px;
    grid-auto-rows: 35px;
    margin-bottom: 20px;
    @media(max-width: 400px) {
        width: 100%;
    }
`;

const Input = styled.input`
    width: ${ ({ size }) => size === "large" ? "100%" : "40%" };
    grid-column: 2;
    grid-row: ${ ({row}) => row};
    padding-left: 10px;
    height: 30px;
    border: 1px solid #08B2AE;
    border-radius: 10px;
    outline: none;
    @media(max-width: 400px) {
        width: ${ ({ size }) => size === "large" ? "100%" : "40%" };
    }
`;

const Label = styled.div`
    grid-column: 1;
    grid-row: ${ ({row}) => row};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
    color: #08B2AE;
    margin-right: 10px;
    text-align: right;

    @media(max-width: 400px) {
        font-size: 13px;
    }

`;

const FinishPurchaseButton = styled.button`
    width: 190px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    background-color: #08B2AE;
    margin: 10px 30px 30px;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
        filter: brightness(1.15);
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
    CheckoutForm,
    FormTitle,
    Inputs,
    Input,
    Label,
    FinishPurchaseButton,
    TotalPrice,
}