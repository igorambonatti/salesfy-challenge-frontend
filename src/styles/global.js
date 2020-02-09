import { createGlobalStyle } from "styled-components";

import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline: 0
  }
  html, body, #root {
  height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Graphik-Regular','Gotham SSm A','Gotham SSm B','Helvetica Neue',Helvetica,Arial,sans-serif !important;
  }
  a{
    text-decoration:none;
  }
 ul{
   list-style:none;
 }
 button{
   cursor:pointer;
 }
`;
