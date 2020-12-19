import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased; //fonte mais detalhada no chrome
    color: #868e96;
    overflow-x: hidden;
  }



  body, input, button {
    font: 16px 'Saira Extra Condensed', sans-serif;
  }

  /* #root {
    max-width: 1230px;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  button {
    cursor: pointer;
  }
`;
