import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --green: #06874e;
    --darkergreen: #056138;
    --lightgray: #ededed;
    --gray: #ced4da;
    --darkgray: #333333;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto-Bold';
    background-color: var(--lightgray);
  }
    
`;
