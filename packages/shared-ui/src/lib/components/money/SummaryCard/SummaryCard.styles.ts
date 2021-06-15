import styled, { css } from 'styled-components'
import { TiArrowDownThick } from 'react-icons/ti'
import { TiArrowUpThick } from 'react-icons/ti'

// import { SummaryCardProps } from '.'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100px;
    width: 500px;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css``}
`

export const UpIcon = styled(TiArrowUpThick)`
  color: green;
`

export const DownIcon = styled(TiArrowDownThick)`
  color: red;
`
