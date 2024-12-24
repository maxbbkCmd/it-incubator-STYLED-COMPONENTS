import { createGlobalStyle } from "styled-components";
import { MyTheme } from "./Theme.styled";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${MyTheme.colors.grey.light}
  }

  a {
    text-decoration: none;
    }
`;

export default GlobalStyles
