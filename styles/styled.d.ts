import type { StyledBreakpointsTheme } from "styled-breakpoints";
import "styled-components";

import type { Theme } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, StyledBreakpointsTheme {}
}
