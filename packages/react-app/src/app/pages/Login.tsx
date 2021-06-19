import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { api } from '../services/axios'

const Test = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`

export const Login = () => {
  useEffect(() => {
    async function fetchUsers() {
      const teste = await api.get('users')
      console.log('==============')
      console.log('testea :>> ', teste.data)
      console.log('==============')
    }

    fetchUsers()
  }, [])

  return (
    <Test>
      <h1>Login</h1>
    </Test>
  )
}
