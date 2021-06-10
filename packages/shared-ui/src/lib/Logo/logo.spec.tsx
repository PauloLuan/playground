import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Logo } from '.'
// import theme from '../Theme'

describe('<Logo />', () => {
  it('should render the Logo component and find it by Test Id', () => {
    renderWithTheme(<Logo testId="Logo" />)
    expect(screen.getByTestId(/Logo/i)).toBeDefined()
  })
})
