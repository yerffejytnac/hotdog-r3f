import type { StyledBreakpoints } from "./breakpoints";
import type { Colors } from "./colors";
import type { Shadows } from "./shadows";
import type { Space } from "./space";
import type {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  TextStyles,
} from "./typography";

interface BaseTheme {
  colors: Colors;
  fonts: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  shadows: Shadows;
  space: Space;
  textStyles: TextStyles;
}

export interface Theme extends BaseTheme, StyledBreakpoints {}
