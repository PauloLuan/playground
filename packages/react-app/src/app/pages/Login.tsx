import styled, { css } from 'styled-components'

const Test = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`

export const Login = () => {
  return (
    <Test>
      <h1>Login</h1>
    </Test>
  )
}
