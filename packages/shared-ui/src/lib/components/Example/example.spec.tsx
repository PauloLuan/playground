import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Example } from '.'
// import theme from '../Theme'

describe('<Example />', () => {
  it('should render the Example component and find it by Test Id', () => {
    renderWithTheme(<Example testId="Example" />)
    expect(screen.getByTestId(/Example/i)).toBeDefined()
  })
})
