import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Rubik', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
