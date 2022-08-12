import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

h1{ font-size: 45px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    background: -webkit-linear-gradient(#fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h3{
    font-family: 'Courier New', Courier, monospace;
}
p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

`