import styled, { css } from 'styled-components'

import { ExampleProps } from '.'

export const Container = styled.div<ExampleProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 100px;
  `}
`

export const Wrapper = styled.div<ExampleProps>`
  ${({ theme, color = 'primary' }) => css`
    background-color: ${theme.colors[color]};
  `}
`
export const Header = styled.h1`
  color: red;
`
