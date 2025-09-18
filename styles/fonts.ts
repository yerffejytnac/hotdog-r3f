import localFont from "next/font/local";

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
export const monoFonts =
  "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace";

export const FTScenik = localFont({
  src: "../public/fonts/FTScenik/FTScenikVF.woff2",
  variable: "--font-FTScenik",
});

export const FTScenikText = localFont({
  src: "../public/fonts/FTScenik/FTScenikTextVF.woff2",
  variable: "--font-FTScenikText",
});

export const FTScenikMono = localFont({
  src: "../public/fonts/FTScenik/FTScenikMonoVF.woff2",
  variable: "--font-FTScenikMono",
});
