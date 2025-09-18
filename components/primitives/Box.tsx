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
  ${layout}
  ${flexbox}
  ${grid}
  ${space}
`;

export const Box = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);
