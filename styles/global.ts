import { createGlobalStyle, css } from "styled-components";

import { reset } from "./reset";
import { theme } from "./theme";

const styles = css`
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  html {
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: ${theme.colors.neutral[95]};
    color: ${theme.colors.neutral[10]};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.body};
    margin-block-end: 0;
    margin-block-start: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    line-height: ${theme.lineHeights.heading};
    margin-block-end: 0;
    margin-block-start: 0;
  }

  h1 {
    ${theme.textStyles.displaySmall}
  }

  h2 {
    ${theme.textStyles.displayMedium}
  }

  h3 {
    ${theme.textStyles.displaySmall}
  }

  h4 {
    ${theme.textStyles.headingXXLarge}
  }

  h5 {
    ${theme.textStyles.headingLarge}
  }

  h6 {
    ${theme.textStyles.headingSmall}
  }

  p {
    ${theme.textStyles.bodyMedium};
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${styles};
`;
