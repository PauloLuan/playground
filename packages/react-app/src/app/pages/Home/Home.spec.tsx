import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Home } from '.'
// import theme from '../Theme'

describe('<Home />', () => {
  it('should render the Home component and find it by Test Id', () => {
    renderWithTheme(<Home testId="Home" />)
    expect(screen.getByTestId(/Home/i)).toBeDefined()
  })
})
