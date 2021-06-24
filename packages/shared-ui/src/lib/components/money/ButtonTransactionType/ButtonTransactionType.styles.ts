import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { ButtonTransactionTypeProps } from '.'

type ButtonType = Omit<ButtonTransactionTypeProps, 'testId'>

export const ButtonTransaction = styled.button<ButtonType>`
  ${({ theme, isSelected, transactionType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 4rem;

    color: ${transactionType === 'income' ? 'green' : 'red'};

    background: ${isSelected
      ? lighten(0.4, transactionType === 'income' ? 'green' : 'red')
      : 'transparent'};

    border: 2px solid ${theme.colors.mindingoBorder};

    transition: ${theme.transition.default};

    &:hover {
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
