import styled, { css, createGlobalStyle } from 'styled-components'

import { NewTransactionModalProps } from '.'

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

export const Form = styled.div`
  ${({ theme, color }) => css`
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
  `}
`
