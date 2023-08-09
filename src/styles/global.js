import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
        color: ${({theme}) => theme.COLORS.GREEN};
        font-family: 'Heebo', sans-serif;
        -webkit-font-smoothing: antialiased;

    .light-mode {

        h1, h2,
        .buttons :nth-child(2),
        .contacts p,
        .contacts span
        {
            color: #000 !important;
        }
        background-color: #fff;
    }
    }
    
    body, input, button, textarea {
    font-size: 16px;
    outline: none;
  }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`