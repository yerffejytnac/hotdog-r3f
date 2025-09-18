import { createStyledBreakpointsTheme } from "styled-breakpoints";

export const defaultBreakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
} as const;

export const breakpoints = createStyledBreakpointsTheme({
  breakpoints: defaultBreakpoints,
});

export type StyledBreakpoints = typeof breakpoints;
