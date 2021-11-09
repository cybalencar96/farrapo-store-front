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
    justify-content: space-between;

    & .left-side {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & .left-side img {
        border-radius: 5px;
        width: 80%;
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
        font-size: 35px;
    }

    & .right-side .price {
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 2px;
    }

    & .right-side .buy-button-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    & .right-side .buy-button-container button {
        width: 75%;
        height: 55px;
        background-color: green;
        border-radius: 4px;

        font-size: 25px;
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
`

export {
    ItemPageContainer,
    ItemContainer,
}