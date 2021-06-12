import styled, { css } from 'styled-components'

import { HeaderProps } from '.'

export const Container = styled.div<HeaderProps>`
  ${({ theme }) => css`
    height: 100px;
    width: 100px;
  `}
`

export const Wrapper = styled.div<HeaderProps>`
  ${({ theme }) => css`
    background-color: black;
  `}
`
export const Header = styled.h1`
  color: red;
`
