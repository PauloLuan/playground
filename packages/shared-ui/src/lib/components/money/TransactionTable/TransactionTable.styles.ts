import styled, { css } from 'styled-components'

import { TransactionTableProps } from '.'

export const Container = styled.div<TransactionTableProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<TransactionTableProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
