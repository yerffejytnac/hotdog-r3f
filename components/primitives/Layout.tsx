"use client";

import type { ReactNode } from "react";
import styled from "styled-components";
import {
  type FlexboxProps,
  flexbox,
  type GridProps,
  grid,
  type LayoutProps,
  layout,
  type SpaceProps,
  space,
} from "styled-system";

interface Props extends FlexboxProps, GridProps, LayoutProps, SpaceProps {
  children?: ReactNode;
}

const Root = styled.div<Props>`
  width: 100%;
  height: 100%;

  ${layout}
  ${flexbox}
  ${grid}
  ${space}


  position: fixed;
  inset: 0;
  max-height: 100vh;
  max-width: 100vw;
  pointer-events: none;

  canvas {
    /* biome-ignore lint: idk ask Clement */
    width: 100% !important;
    /* biome-ignore lint: idk ask Clement */
    height: 100% !important;
  }
`;

export const Layout = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);
