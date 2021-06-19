import styled, { css } from 'styled-components'

// import { TransactionTableProps } from '.'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    font-size: 1rem;
    font-weight: 400;

    background: ${theme.colors.mindingoBackground};
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      background: ${theme.colors.mindingoShape};
      border-radius: 5rem;
    }

    th {
      color: ${theme.colors.mindingoTextBody};
      background-color: ${theme.colors.mindingoTextTitle};
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;

      &:first-child {
        border-radius: 10px 0 0 10px;
      }

      &:last-child {
        border-radius: 0 10px 10px 0;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${theme.colors.mindingoShape};
      color: ${theme.colors.mindingoTextBody};

      &:first-child {
        color: ${theme.colors.mindingoTextTitle};
        border-radius: 10px 0 0 10px;
      }

      &:last-child {
        border-radius: 0 10px 10px 0;
      }
    }

    /*
    tr:nth-child(even) {
      background-color: ${theme.colors.gray};
    }

    tr:hover {
      background-color: ${theme.colors.danger};
    } */
  `}
`
