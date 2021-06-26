import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'

import { Summary } from '.'
// import theme from '../Theme'

describe('<Summary />', () => {
  it('should render the Summary component and find it by Test Id', () => {
    renderWithTheme(<Summary testId="SummaryMindingo" />)
    expect(screen.getByTestId(/SummaryMindingo/i)).toBeDefined()
  })
})
