import styled from "styled-components";

const SingleFilterBox = styled.div`
    margin-left: 30px;
    position: relative;
    &:first-of-type{
        margin-left: 0px;
    }

    @media(max-width: 950px) {
        margin: 0px 30px 15px;
        &:first-of-type{
            margin-left: 30px;
        }
    }
`;

const ClosedFilterBox = styled.div`
    height: 30px;
    padding: 0px 10px;
    border: 1px solid #38C2BF;
    color: #08B2AE;
    cursor: pointer;
    background-color: ${ ({ isActive }) => isActive ? "rgba(56,194,191,0.35)" : "#FFFFFF"};
    display: flex;
    align-items: center;
    text-transform: lowercase;
    transition: all 250ms;
    & svg {
        margin-left: 10px;
        transform: ${ ({ isActive }) => isActive ? "rotate(180deg)" : "rotate(0deg)"};
        transition: all 250ms;
    }
`;

const OptionsBox = styled.div`
    border: 1px solid #08B2AE;
    border-radius: 0px 10px 10px 10px;
    padding: 30px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 30px;
    z-index: 1;
    background-color: #FFFFFF;
    & div {
        width: 100%;
        font-size: 18px;
        color: #08B2AE;
        margin-bottom: 20px;
        white-space: nowrap;
        display: flex;
        & input {
            margin-right: 8px;
            cursor: pointer;
        }
        & span {
            width: 100%;
            text-align: center;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const ApplyButton = styled.button`
    padding: 6px;
    margin-bottom: 15px;
    background-color: #08B2AE;
    color: #FFFFFF;
    cursor: pointer;
`;

export {
    SingleFilterBox,
    ClosedFilterBox,
    OptionsBox,
    ApplyButton,
}