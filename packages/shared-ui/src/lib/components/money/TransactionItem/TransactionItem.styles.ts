import styled, { css } from 'styled-components'

import { TransactionItemProps } from '.'

export const Container = styled.div<TransactionItemProps>`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Wrapper = styled.div<TransactionItemProps>`
  ${({ theme }) => css`
    background-color: red;
  `}
`
export const Main = styled.h1`
  color: black;
`
