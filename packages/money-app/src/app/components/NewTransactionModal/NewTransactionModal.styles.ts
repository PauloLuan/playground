import { darken, transparentize } from 'polished'
import { CgCloseO } from 'react-icons/cg'
import styled, { createGlobalStyle, css } from 'styled-components'
import { ButtonTransactionTypeProps } from '.'

export const CustomTransactionModalStyles = createGlobalStyle`
  ${({ theme }) => css`
    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: ${theme.colors.mindingoBackground};
      padding: 3rem;
      position: relative;
      border-radius: 0.5rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.mindingoTextTitle};
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    input {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 4rem;
      padding: 0 1rem;

      border: 1px solid ${theme.colors.mindingoBorder};
      border-radius: 0.5rem;
      background: ${theme.colors.mindingoFormBackground}

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: ${theme.colors.mindingoTextTitle};
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      height: 3rem;
      margin-top: 1.5rem;
      color: ${theme.colors.mindingoShape};
      background: ${theme.colors.mindingoGreen};
      border: 0;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 100;

      transition: ${theme.transition.fast};

      &:hover {
        filter: brightness(0.8);
      }
    }

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      grid-gap: 0.5rem;
      margin: 1rem 0;
    }
  `}
`

export const CloseButton = styled(CgCloseO)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`

type ButtonType = Omit<ButtonTransactionTypeProps, 'testId'>

export const TransactionButton = styled.button<ButtonType>`
  ${({ theme, isSelected, transactionType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 4rem;

    color: ${transactionType === 'income' ? 'green' : 'red'};

    background: ${isSelected
      ? transparentize(
          0.9,
          transactionType === 'income' ? theme.colors.mindingoGreen : 'red'
        )
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
