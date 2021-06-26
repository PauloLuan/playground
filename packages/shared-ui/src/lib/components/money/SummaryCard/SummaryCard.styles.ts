import styled, { css } from 'styled-components'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'
import { MdAttachMoney } from 'react-icons/md'

import { SummaryCardProps } from '.'
type SummaryPickedProps = Pick<SummaryCardProps, 'type'>

export const Container = styled.div<SummaryPickedProps>`
  ${({ theme, type }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    background: ${type === 'total'
      ? theme.colors.mindingoGreen
      : theme.colors.mindingoShape};

    color: ${() => {
      switch (type) {
        case 'income':
          return theme.colors.mindingoGreen
        case 'donation':
          return theme.colors.mindingoRed
        case 'total':
          return theme.colors.mindingoShape
      }
    }};

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
      font-size: 2rem;
      font-weight: 100;
    }
  `}
`

export const UpIcon = styled(GiReceiveMoney)`
  color: green;
  border: 2px solid;
  border-radius: 50%;
`

export const DownIcon = styled(GiPayMoney)`
  border: 2px solid red;
  border-radius: 50%;
`

export const MoneyIcon = styled(MdAttachMoney)`
  border: 2px solid white;
  border-radius: 50%;
`
