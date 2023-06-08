interface ThemeProviderProps {
  children: React.ReactNode;
}

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Theme = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
