import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Mukta', sans-serif;
        font-weight: 400;
        font-size: 100%;
    }
`

export default GlobalStyles;