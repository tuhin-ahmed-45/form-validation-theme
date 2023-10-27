// pages/_app.tsx

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@/styles/theme";
import useThemeStore from "@/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { mode } = useThemeStore((state) => state);

  const theme = mode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeProvider attribute="class">
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
