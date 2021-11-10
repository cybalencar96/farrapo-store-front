import styled from "styled-components";

const ItemPageContainer = styled.main`
    margin-top: 100px;
    padding: 20px 40px;

    display: flex;
    flex-direction: column;
    gap: 150px;
`

const ItemContainer = styled.section`
    display: flex;
    width: calc(100vw - 80px);
    justify-content: space-evenly;
    gap: 20px;

    & .left-side {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    & .left-side img {
        border-radius: 5px;
        width: 100%;
        min-width: 250px;
    }

    & .right-side {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & .right-side .categories {
        color: #B2B0AE;
        font-weight: bold;
        font-size: 15px;
    }

    & .right-side .item-name {
        font-weight: bold;
        font-size: 30px;
    }

    & .right-side .price {
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 2px;
        color: #38C2BF;
    }

    & .right-side .buy-button-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    & .right-side .buy-button-container button {
        width: 75%;
        height: 55px;
        border-radius: 4px;

        font-size: 20px;
        color: white;
    }

    & .right-side .buy-button-container .iwant {
        background-color: green;
    }

    & .right-side .buy-button-container .iwant:hover {
        background-color: #39a857;
    }

    & .right-side .buy-button-container .add-cart {
        background-color: white;
        color: #38C2BF;
        border: 1px solid #38C2BF;
    }

    & .right-side .buy-button-container .add-cart:hover {
        background-color: #38C2BF;
        color: white;
    }

    & .right-side .size-container {
        width: 100%;
        height: 70px;
        margin: 20px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: #B2B0AE;
        font-size: 17px;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
    & .right-side .size-container p {
        color: black;
        font-size: 19px;
    }

    & .right-side .description span {
        color: #B2B0AE;
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
        display: block;
    }

    & .right-side .description {
        font-size: 19px;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 50px;
        & .left-side {
            margin: 0 auto;
        }

        & .left-side img {
            width: 70%;
        }

        & .right-side {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    }
`

export {
    ItemPageContainer,
    ItemContainer,
}