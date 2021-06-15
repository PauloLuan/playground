import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { TransactionItem } from '.'
// import theme from '../Theme'

describe('<TransactionItem />', () => {
  it('should render the TransactionItem component and find it by Test Id', () => {
    renderWithTheme(<TransactionItem testId="TransactionItem" />)
    expect(screen.getByTestId(/TransactionItem/i)).toBeDefined()
  })
})
