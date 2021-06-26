import { ThemeProvider } from 'styled-components'
import { theme, CSSReset } from '@pauloluan/shared-ui'

// import { GlobalStyles } from './styles/global'
import { Routes } from './routes'

import { startMirage } from '../fake-backend/users'
startMirage()

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <CSSReset />
      {/* <GlobalStyles />/ */}
    </ThemeProvider>
  )
}
