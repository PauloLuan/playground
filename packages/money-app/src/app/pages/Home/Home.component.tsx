import { money } from '@pauloluan/shared-ui'
import { Summary, Transactions } from '../../components'
import * as S from './Home.styles'
const { Header, NewTransactionModal, useNewTransactionModal } = money

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'Home' }: HomeProps) => {
  const { handleOpenModal, handleCloseModal, newTransactionModalIsOpen } =
    useNewTransactionModal()

  return (
    <S.Container data-testid={testId}>
      <Header newDonationAction={handleOpenModal} />
      <NewTransactionModal
        handleCloseModal={handleCloseModal}
        newTransactionModalIsOpen={newTransactionModalIsOpen}
      />
      <Summary />
      <Transactions />
    </S.Container>
  )
}
