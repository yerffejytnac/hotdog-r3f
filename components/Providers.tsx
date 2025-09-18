"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@/styles";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
