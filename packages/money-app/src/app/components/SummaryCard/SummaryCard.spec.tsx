import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'

import { SummaryCard } from '.'
// import theme from '../Theme'

describe('<SummaryCard />', () => {
  it('should render the SummaryCard component and find it by Test Id', () => {
    renderWithTheme(<SummaryCard testId="SummaryCard" />)
    expect(screen.getByTestId(/SummaryCard/i)).toBeDefined()
  })
})
