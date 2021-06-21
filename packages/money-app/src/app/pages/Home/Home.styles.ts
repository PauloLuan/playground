import styled, { css } from 'styled-components'

import { HomeProps } from '.'

export const Container = styled.div<HomeProps>`
  ${({ theme, color }) => css`
    background: ${theme.colors.mindingoBackground};
  `}
`
