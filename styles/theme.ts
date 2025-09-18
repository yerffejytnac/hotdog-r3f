import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { shadows } from "./shadows";
import { space } from "./space";
import type { Theme } from "./types";
import {
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  textStyles,
} from "./typography";

export const theme: Theme = {
  colors,
  ...breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  space,
  textStyles,
};
