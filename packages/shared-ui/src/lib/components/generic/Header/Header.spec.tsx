import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../../utils/tests/helpers'

import { Header } from '.'
// import theme from '../Theme'

describe('<Header />', () => {
  it('should render the Header component and find it by Test Id', () => {
    renderWithTheme(<Header testId="Header" />)
    expect(screen.getByTestId(/Header/i)).toBeDefined()
  })
})
