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
      <S.CustomTransactionModalStyles />
      <Modal
        data-testid={testId}
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button onClick={handleCloseModal}>x</button>

        <div>New Transaction</div>
      </Modal>
    </S.Container>
  )
}
