import styled, { css } from 'styled-components'

import { SummaryProps } from '.'

export const Container = styled.div<SummaryProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<SummaryProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
