import styled from 'styled-components'

const SignupContainer = styled.main`
    margin-top: 150px;
    margin-bottom: 150px;

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
        height: 30px;
        border-bottom: 1px solid lightgray;
        padding-left: 10px;
        font-size: 18px;

    }

    & .inputs .tp1:focus {
        outline: none;
        border-bottom: 2px solid purple;
        padding: 0;
    }

    & .inputs .tp1:focus {
        outline: none;
        border-bottom: 2px solid purple;
    }

    & .gender-radios {
        display: flex;
        align-items: center;
    }

    & .gender-radios label{
        margin-right: 10px;
    }

    & div > label {
        font-size: 20px;
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
`

export {
    SignupContainer,
    SignUpForm,
}