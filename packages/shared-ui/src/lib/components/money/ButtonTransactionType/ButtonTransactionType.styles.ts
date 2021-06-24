import styled, { css } from 'styled-components'
import { ButtonTransactionTypeProps } from '.'

type ButtonType = Pick<ButtonTransactionTypeProps, 'type'>

export const Container = styled.div`
  ${({ theme }) => css`
    height: 7rem;
    width: 12rem;
  `}
`

export const ButtonTransaction = styled.button`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    color: ${type === 'income' ? 'green' : 'red'};
    height: 100%;
    width: 100%;

    background: ${theme.colors.mindingoShape};
    border: 0;

    transition: ${theme.transition.default};

    &:hover {
      filter: brightness(90%);
    }

    svg {
      border-radius: 50%;
      border: 2px solid;
      margin-right: 10px;
    }

    span {
    }
  `}
`
