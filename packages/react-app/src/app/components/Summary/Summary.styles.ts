import styled, { css } from 'styled-components'

import { SummaryProps } from '.'

export const Container = styled.div<SummaryProps>`
  ${({ theme, color }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 auto;
    margin-top: -50px;
    max-width: 1080px;
  `}
`
