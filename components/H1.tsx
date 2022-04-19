import styled, { css } from "styled-components";
import { theme } from "./theme";
type HeadingType = 'primary' | 'secondary'

type H1Props = {
  typNadpisu: HeadingType
}

export const H1 = styled.h1<H1Props>`
  font-size: ${theme.sizes.xl};
  color: ${({typNadpisu}) => typNadpisu==='secondary'?
    theme.colors.secondary : theme.colors.primary };
  
 
  
  background-color: beige;
  transition: all ease 15s;
`


