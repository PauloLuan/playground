import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { Theme } from '../../lib/Theme'
import { ResetStyles } from '../../lib/CSSReset'
import { ImprovedTypography } from '../../lib/Theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={Theme}>
      <ResetStyles />
      <ImprovedTypography />
      {children}
    </ThemeProvider>
  )
