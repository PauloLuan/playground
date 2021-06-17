import styled, { css } from 'styled-components'

// import { TransactionTableProps } from '.'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    font-size: 1rem;
    font-weight: 100;
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    border-spacing: 0 0.5rem;

    tr:nth-child(even) {
      background-color: ${theme.colors.gray};
    }

    tr:hover {
      background-color: ${theme.colors.danger};
    }
  `}
`
