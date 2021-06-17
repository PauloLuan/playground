import styled, { css } from 'styled-components'
import { TiArrowDownThick } from 'react-icons/ti'
import { TiArrowUpThick } from 'react-icons/ti'

import { SummaryCardProps } from '.'
type SummaryPickedProps = Pick<SummaryCardProps, 'type'>

export const Container = styled.div<SummaryPickedProps>`
  ${({ theme, type }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 2rem;

    height: 400px;
    width: 300px;
    background: ${theme.colors.mindingoShape};
    color: ${type === 'income' ? 'green' : 'red'};
    border: 2px solid black;

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }
  `}
`

export const Header = styled.header<SummaryPickedProps>`
  ${({ type }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${type === 'income' ? 'green' : 'red'};
      font-size: 2rem;
      font-weight: 100;
    }
  `}
`

export const UpIcon = styled(TiArrowUpThick)`
  color: green;
  border: 2px solid;
  border-radius: 50%;
`

export const DownIcon = styled(TiArrowDownThick)`
  border: 2px solid red;
  color: red;
  border-radius: 50%;
`
