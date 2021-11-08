import styled from "styled-components";

const SigninContainer = styled.main`
    margin-top: 100px;
    height: calc(100vh - 100px);
    background-image: url('/logActions-bg.png');
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    & > h1 {
        font-family: 'Cinzel', serif;
        font-size: 50px;
        font-weight: bold;
    }
`

const SigninForm = styled.form`
    width: 50vw;
    max-width: 500px;
    
    & .inputs {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    & .inputs .tp1 {
        width: 100%;
        border: none;
        height: 50px;
        border-bottom: 1px solid lightgray;
        padding-left: 10px;
        font-size: 20px;
        background-color: #F6F6F6;
    }

    & .inputs .tp1:focus {
        outline: none;
        border-bottom: 2px solid purple;
        padding: 0;
    }

    & button {
        width: 100%;
        height: 40px;
        border-radius: 50px;
        border: none;
        margin-top: 50px;
        background-color: #38C2BF;

        font-family: 'Cinzel', serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
    
`

export {
    SigninContainer,
    SigninForm,
}