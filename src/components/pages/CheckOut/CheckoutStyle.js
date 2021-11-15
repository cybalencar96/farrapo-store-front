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

const CheckoutForm = styled.form`

`;

const Inputs = styled.div`
    & div {
        height: 30px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        position: relative;
    }
`;

const FormTitle = styled.span`
    font-size: 24px;
    color: #08B2AE;
    display: inline-block;
    margin-bottom: 16px;
`;

const Input = styled.input`
    width: ${ ({ size }) => size === "large" ? "200px" : "70px" };
    padding-left: 10px;
    height: 30px;
    position: absolute;
    border: 1px solid #08B2AE;
    border-radius: 10px;
    top: 0px;
    left: 150px;
`;

const Label = styled.span`
    font-size: 20px;
    color: #08B2AE;
    margin-right: 10px;

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
}