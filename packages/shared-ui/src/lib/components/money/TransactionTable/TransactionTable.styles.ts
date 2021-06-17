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
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 600;
      text-align: left;
      color: ${theme.colors.mindingoTextBody};
      padding: 1rem 2rem;
    }

    tr:nth-child(even) {
      background-color: ${theme.colors.gray};
    }

    tr:hover {
      background-color: ${theme.colors.danger};
    }
  `}
`
