import {
  Header,
  NewTransactionModal,
  Summary,
  Transactions,
  useNewTransactionModal
} from '../../components'
import * as S from './Home.styles'
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
