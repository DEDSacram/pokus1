import styled from "styled-components";
import { theme } from "./theme";

const a = 'beige';

export const H2 = styled.h1`
  font-size: ${theme.sizes.l};
  color: ${theme.colors.primary};
  background-color: ${a};
  transition: all ease .5s;
`;
