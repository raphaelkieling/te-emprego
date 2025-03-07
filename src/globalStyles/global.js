import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
  }

  body {
    font-family: "Nunito", cursive, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    transition: .25s ease;
    min-height: 100%;
  }
`;
