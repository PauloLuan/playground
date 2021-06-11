import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Sidebar } from '.'
// import theme from '../Theme'

describe('<Sidebar />', () => {
  it('should render the Sidebar component and find it by Test Id', () => {
    renderWithTheme(<Sidebar testId="Sidebar" />)
    expect(screen.getByTestId(/Sidebar/i)).toBeDefined()
  })
})
