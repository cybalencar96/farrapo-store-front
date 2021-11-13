import styled from 'styled-components'

const HistoryContainer = styled.main`
    margin-top: 100px;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    & .empty {
        width: 100%;
        height: calc(100vh - 180px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        color:#38C2BF;
        gap: 20px;
    }

    & .empty span{
        font-size: 30px;
        color: black;
    }

`

const HistoryList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;

    & li {
        width: 100%;
        height: calc(100vh - 100px);
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        position: relative;
    }

    & .left-side {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    & .left-side img {
        border-radius: 5px;
        width: 100%;
        min-width: 300px;
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

    & .arrow-next {
        position: absolute;
        width: calc(100% - 40px);
        font-size: 40px;
        color:#38C2BF;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    & .arrow-next.down {
        bottom: 15px;
    }
    & .arrow-next.up {
        top: 15px;
    }

    & .arrow-next:hover {
        background-color: rgba(200,200,200, 0.3)
    }
`

export {
    HistoryContainer,
    HistoryList,
}