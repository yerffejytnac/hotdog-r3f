"use client";

import type React from "react";
import { type FC, memo } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { StyledComponentsRegistry } from "./StyledComponentsRegistry";
import { theme as defaultTheme } from "./theme";
import type { Theme as DefaultTheme } from "./types";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<DefaultTheme>;
}

export const ThemeProvider: FC<ThemeProviderProps> = memo(
  ({ children, theme = {} }) => {
    const extendedTheme = Object.assign(defaultTheme, {
      ...theme,
    });

    return (
      <StyledComponentsRegistry>
        <StyledComponentsThemeProvider theme={extendedTheme}>
          <GlobalStyles />
          {children}
        </StyledComponentsThemeProvider>
      </StyledComponentsRegistry>
    );
  },
);

ThemeProvider.displayName = "ThemeProvider";
