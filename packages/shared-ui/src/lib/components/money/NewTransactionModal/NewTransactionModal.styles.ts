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

export const Container = styled.div`
  ${({ theme, color }) => css`
    height: 100px;
    width: 500px;
  `}
`
