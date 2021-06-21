import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Transactions } from '.'
// import theme from '../Theme'

describe('<Transactions />', () => {
  it('should render the Transactions component and find it by Test Id', () => {
    renderWithTheme(<Transactions testId="Transactions" />)
    expect(screen.getByTestId(/Transactions/i)).toBeDefined()
  })
})
