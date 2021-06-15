import styled, { css } from 'styled-components'

import { SummaryCardProps } from '.'

export const Container = styled.div<SummaryCardProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<SummaryCardProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
