import {
  FTScenik,
  FTScenikMono,
  FTScenikText,
  monoFonts,
  systemFonts,
} from "./fonts";

const fonts = {
  body: `${FTScenikText.style.fontFamily}, ${systemFonts}`,
  heading: `${FTScenik.style.fontFamily}, ${systemFonts}`,
  monospace: `${monoFonts}`,
};

const fontSizes = {
  displayLarge: 54,
  displayMedium: 44,
  displaySmall: 36,
  displayXSmall: 28,
  headingXXLarge: 32,
  headingXLarge: 28,
  headingLarge: 24,
  headingMedium: 22,
  headingSmall: 16,
  headingXSmall: 14,
  labelLarge: 18,
  labelMedium: 16,
  labelSmall: 14,
  labelXSmall: 12,
  bodyLarge: 18,
  bodyMedium: 16,
  bodySmall: 14,
  bodyXSmall: 12,
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 600,
  black: 800,
};

const lineHeights = {
  body: "calc(1em + 0.5rem)",
  heading: 1.125,
  displayLarge: "54px",
  displayMedium: "48px",
  displaySmall: "40px",
  displayXSmall: "32px",
  headingXXLarge: "40px",
  headingXLarge: "36px",
  headingLarge: "32px",
  headingMedium: "28px",
  headingSmall: "24px",
  headingXSmall: "20px",
  labelLarge: "24px",
  labelMedium: "20px",
  labelSmall: "16px",
  labelXSmall: "16px",
  bodyLarge: "28px",
  bodyMedium: "24px",
  bodySmall: "20px",
  bodyXSmall: "20px",
};

export type TextStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontStyle?: string;
  letterSpacing: number;
};

export enum TypescaleKey {
  displayLarge = "displayLarge",
  displayMedium = "displayMedium",
  displaySmall = "displaySmall",
  displayXSmall = "displayXSmall",
  headingXXLarge = "headingXXLarge",
  headingXLarge = "headingXLarge",
  headingLarge = "headingLarge",
  headingMedium = "headingMedium",
  headingSmall = "headingSmall",
  headingXSmall = "headingXSmall",
  labelLarge = "labelLarge",
  labelMedium = "labelMedium",
  labelSmall = "labelSmall",
  labelXSmall = "labelXSmall",
  bodyLarge = "bodyLarge",
  bodyMedium = "bodyMedium",
  bodySmall = "bodySmall",
  bodyXSmall = "bodyXSmall",
}

const textStyles = {
  displayLarge: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayLarge,
    lineHeight: lineHeights.displayLarge,
    fontWeight: fontWeights.black,
    letterSpacing: -2,
  },
  displayMedium: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayMedium,
    lineHeight: lineHeights.displayMedium,
    fontWeight: fontWeights.black,
    letterSpacing: -1.5,
  },
  displaySmall: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displaySmall,
    lineHeight: lineHeights.displaySmall,
    fontWeight: fontWeights.black,
    letterSpacing: -1,
  },
  displayXSmall: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayXSmall,
    lineHeight: lineHeights.displayXSmall,
    fontWeight: fontWeights.black,
    letterSpacing: -1,
  },
  headingXXLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXXLarge,
    lineHeight: lineHeights.headingXXLarge,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  headingXLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXLarge,
    lineHeight: lineHeights.headingXLarge,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  headingLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingLarge,
    lineHeight: lineHeights.headingLarge,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  headingMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingMedium,
    lineHeight: lineHeights.headingMedium,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  headingSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingSmall,
    lineHeight: lineHeights.headingSmall,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.2,
  },
  headingXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXSmall,
    lineHeight: lineHeights.headingXSmall,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.2,
  },
  labelLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelLarge,
    lineHeight: lineHeights.labelLarge,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  labelMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelMedium,
    lineHeight: lineHeights.labelMedium,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  labelSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelSmall,
    lineHeight: lineHeights.labelSmall,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  labelXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelXSmall,
    lineHeight: lineHeights.labelXSmall,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  bodyLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyLarge,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.01,
  },
  bodyMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyMedium,
    lineHeight: lineHeights.bodyMedium,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.01,
  },
  bodySmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodySmall,
    lineHeight: lineHeights.bodySmall,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  bodyXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyXSmall,
    lineHeight: lineHeights.bodyXSmall,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  default: {
    fontFamily: fonts.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
};

export { fontSizes, fontWeights, fonts, lineHeights, textStyles };

export type LineHeights = typeof lineHeights;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;
export type TextStyles = typeof textStyles;

export interface FontFamilies {
  body: string;
  heading: string;
  monospace: string;
}
