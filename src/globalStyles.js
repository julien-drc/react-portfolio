 import { createGlobalStyle } from "styled-components"


 const GlobalStyle = createGlobalStyle`

  *,*::before,*::after,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding:0;
  }

  h1,h2,h3,h4,h5,h6{
    display: inline-block;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans serif;
    background: #8E0E00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  }

 `

 export default GlobalStyle;
