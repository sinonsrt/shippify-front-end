import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20];

fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];

const colors = {
  primary: "#FFFF",
  secondary: "#A3F1",
};

const theme = {
  fontSizes,
  colors,
};

export type ThemeType = typeof theme;

interface ThemeProps {
  children: JSX.Element[];
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
