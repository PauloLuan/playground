import styled, { css } from 'styled-components'

import { NewTransactionModalProps } from '.'

export const Container = styled.div`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`
