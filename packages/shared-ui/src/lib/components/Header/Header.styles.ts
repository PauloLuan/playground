import styled, { css } from 'styled-components'

import { HeaderProps } from '.'

export const Container = styled.div<HeaderProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 100px;
  `}
`

export const Wrapper = styled.div<HeaderProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
  `}
`
export const Header = styled.h1`
  color: red;
`
