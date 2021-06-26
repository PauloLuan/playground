import styled, { css } from 'styled-components'
import { FcMoneyTransfer } from 'react-icons/fc'

// import { HeaderProps } from '.'

export const Container = styled.header`
  ${({ theme }) => css`
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `}
`

export const Content = styled.header`
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

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.mindingoShape};

    background: #5d26c1;

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
