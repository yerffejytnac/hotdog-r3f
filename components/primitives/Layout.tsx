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
`;

export const Layout = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);
