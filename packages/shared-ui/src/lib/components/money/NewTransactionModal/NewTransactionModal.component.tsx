import Modal from 'react-modal'
import * as S from './NewTransactionModal.styles'

export interface NewTransactionModalProps {
  testId?: string
  newTransactionModalIsOpen: boolean
  handleCloseModal: () => void
}

export const NewTransactionModal = ({
  testId = 'NewTransactionModal',
  newTransactionModalIsOpen,
  handleCloseModal
}: NewTransactionModalProps) => {
  return (
    <S.Container>
      <Modal
        data-testid={testId}
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
      >
        <button onClick={handleCloseModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </S.Container>
  )
}
