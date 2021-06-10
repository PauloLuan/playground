import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 6rem;
    height: 3rem;
  `,

  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
  `}
`
