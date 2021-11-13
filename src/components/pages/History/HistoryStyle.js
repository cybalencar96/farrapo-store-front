import styled from 'styled-components'

const HistoryContainer = styled.main`
    margin-top: 100px;
    padding: 20px 20px;

    display: flex;
    flex-direction: column;
    gap: 50px;
`

const HistoryList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & li {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    & .left-side {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    & .left-side img {
        border-radius: 5px;
        width: 100%;
    }

    & .right-side {
        display: flex;
        flex-direction: column;
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

    & .right-side .size-container {
        width: 100%;
        height: 70px;
        margin-top: 20px;

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
        gap: 100px;
        
        & .left-side {
            width: auto;
            height: auto;
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
    HistoryContainer,
    HistoryList,
}