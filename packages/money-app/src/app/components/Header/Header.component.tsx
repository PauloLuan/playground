import { NewTransactionModal, useNewTransactionModal } from '../../components'
import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'Header' }: HeaderProps) => {
  const { handleOpenModal, handleCloseModal, newTransactionModalIsOpen } =
    useNewTransactionModal()

  return (
    <S.Container data-testid={testId}>
      <S.Content>
        <S.LogoImage />
        <S.Button onClick={handleOpenModal}>New Donation</S.Button>
        <NewTransactionModal
          handleCloseModal={handleCloseModal}
          newTransactionModalIsOpen={newTransactionModalIsOpen}
        />
      </S.Content>
    </S.Container>
  )
}
