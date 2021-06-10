import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Container = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 100px;
  `}
`

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
  `}
`
export const Header = styled.h1`
  color: red;
`
