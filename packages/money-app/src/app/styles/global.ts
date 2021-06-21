import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.mainBg};
    }

    #root {
      height: 100vh;
    }
  `}
`
