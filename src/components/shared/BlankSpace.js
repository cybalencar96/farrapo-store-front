import styled from "styled-components";

const BlankSpace = styled.section`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 3;
    display: ${ ({ isShown }) => isShown ? "block" : "none"};
`;

export default BlankSpace;