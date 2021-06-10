import { ThemeProvider } from 'styled-components'
import { theme, CSSReset, Logo } from '@pauloluan/shared-ui'

import { GlobalStyles } from './styles/global'
import { Routes } from './routes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo color="black" />
      <Routes />
      <CSSReset />
      <GlobalStyles />
    </ThemeProvider>
  )
}
