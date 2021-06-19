import styled, { css } from 'styled-components'

import { TransactionsProps } from '.'

export const Container = styled.div<TransactionsProps>`
  ${({ theme, color }) => css`
    max-width: 1080px;
    margin: 0 auto;
  `}
`
