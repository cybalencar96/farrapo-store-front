import styled from 'styled-components'

const SignupContainer = styled.main`
    margin-top: 100px;
    padding-top: 50px;
    padding-bottom: 150px;
    background-image: url('/logActions-bg.png');
    background-repeat: round;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    & > h1 {
        font-family: 'Cinzel', serif;
        font-size: 50px;
        font-weight: bold;
    }
`

const SignUpForm = styled.form`
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
        font-size: 18px;

    }

    & .inputs .tp1:focus {
        outline: none;
        border-bottom: 2px solid purple;
        padding: 0;
    }

    & .gender-radios {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    & .radio {
        min-width: 20px;
        width: 20px;
        height: 22px;
    }

    & .gender-radios label{
        margin-right: 10px;
    }

    & div > label {
        font-size: 30px;
    }

    & .birth {
        width:150px;
        height:30px;
        font-size: 16px;
    }

    & button {
        width: 100%;
        height: 60px;
        border-radius: 50px;
        border: none;
        margin-top: 50px;
        background-color: #38C2BF;

        font-family: 'Cinzel', serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }

    @media (max-width: 750px) {
        & .gender-radios {
            flex-direction: column;
        }

        & .genders-container{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

export {
    SignupContainer,
    SignUpForm,
}