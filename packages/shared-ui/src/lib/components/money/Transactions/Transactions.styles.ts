import styled, { css } from 'styled-components'

import { TransactionsProps } from '.'

export const Container = styled.div<TransactionsProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<TransactionsProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
