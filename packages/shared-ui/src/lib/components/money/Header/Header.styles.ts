import styled, { css } from 'styled-components'
import { FcMoneyTransfer } from 'react-icons/fc'

import { HeaderProps } from '.'

export const Container = styled.header<HeaderProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.mindingoBlue};
  `}
`

export const Content = styled.header<HeaderProps>`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const LogoImage = styled(FcMoneyTransfer)`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
  `}
`

export const Button = styled.button<HeaderProps>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.mindingoShape};
    background-color: ${theme.colors.mindingoBlueLight};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: ${theme.transition.fast};

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
