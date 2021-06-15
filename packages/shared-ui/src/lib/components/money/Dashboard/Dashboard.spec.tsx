import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Dashboard } from '.'
// import theme from '../Theme'

describe('<Dashboard />', () => {
  it('should render the Dashboard component and find it by Test Id', () => {
    renderWithTheme(<Dashboard testId="Dashboard" />)
    expect(screen.getByTestId(/Dashboard/i)).toBeDefined()
  })
})
