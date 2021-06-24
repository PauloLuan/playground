import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { ButtonTransactionType } from '.'
// import theme from '../Theme'

describe('<ButtonTransactionType />', () => {
  it('should render the ButtonTransactionType component and find it by Test Id', () => {
    renderWithTheme(<ButtonTransactionType testId="ButtonTransactionType" />)
    expect(screen.getByTestId(/ButtonTransactionType/i)).toBeDefined()
  })
})
