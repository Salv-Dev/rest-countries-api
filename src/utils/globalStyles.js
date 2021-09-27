import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${props => props.theme.text};
        font-size: 14px;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${props => props.theme.background};
    }

    input {
        color: ${props => props.theme.text};
    }
`;

export default GlobalStyles;