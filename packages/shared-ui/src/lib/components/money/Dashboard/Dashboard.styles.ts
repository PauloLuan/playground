import styled, { css } from 'styled-components'

import { DashboardProps } from '.'

export const Container = styled.div<DashboardProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<DashboardProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
