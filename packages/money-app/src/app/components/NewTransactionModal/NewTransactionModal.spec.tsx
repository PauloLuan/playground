import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'

import { NewTransactionModal } from '.'
// import theme from '../Theme'

describe('<NewTransactionModal />', () => {
  it('should render the NewTransactionModal component and find it by Test Id', () => {
    renderWithTheme(
      <NewTransactionModal
        newTransactionModalIsOpen={true}
        testId="NewTransactionModal"
      />
    )
    expect(screen.getByTestId(/NewTransactionModal/i)).toBeDefined()
  })
})
