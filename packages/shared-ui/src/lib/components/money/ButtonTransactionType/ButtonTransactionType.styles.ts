import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { ButtonTransactionTypeProps } from '.'

type ButtonType = Pick<ButtonTransactionTypeProps, 'transactionType'>

export const ButtonTransaction = styled.button<ButtonType>`
  ${({ theme, transactionType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    color: ${transactionType === 'income' ? 'green' : 'red'};

    background: transparent;
    border: 2px solid ${theme.colors.mindingoBorder};

    height: 4rem;

    transition: ${theme.transition.default};

    &:hover {
      /* filter: brightness(50%); */
      border-color: ${darken(0.2, theme.colors.mindingoBorder)};
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
