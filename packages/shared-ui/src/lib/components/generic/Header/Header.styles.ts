import styled, { css } from 'styled-components'

import { HeaderProps } from '.'

export const Container = styled.nav<HeaderProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    width: 100%;
    background: white;
  `}
`

export const Logo = styled.div`
  margin: 10px;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
`

export const Link = styled.div`
  margin: 10px;
`

export const Header = styled.h1`
  color: red;
`
