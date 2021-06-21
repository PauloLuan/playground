import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Summary } from '.'
// import theme from '../Theme'

describe('<Summary />', () => {
  it('should render the Summary component and find it by Test Id', () => {
    renderWithTheme(<Summary testId="Summary" />)
    expect(screen.getByTestId(/Summary/i)).toBeDefined()
  })
})
