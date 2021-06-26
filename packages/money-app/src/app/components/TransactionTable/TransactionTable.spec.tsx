import { screen } from '@testing-library/react'
import { renderWithTheme } from '@pauloluan/shared-ui'

import { TransactionTable } from '.'
// import theme from '../Theme'

describe('<TransactionTable />', () => {
  it('should render the TransactionTable component and find it by Test Id', () => {
    renderWithTheme(<TransactionTable testId="TransactionTable" />)
    expect(screen.getByTestId(/TransactionTable/i)).toBeDefined()
  })
})
