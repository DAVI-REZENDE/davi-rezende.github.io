import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Quicksand';
    background-color: #202733;
  }
`;

