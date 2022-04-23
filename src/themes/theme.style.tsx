import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyes = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;