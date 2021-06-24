import Modal from 'react-modal'
import { ButtonTransactionType } from '../ButtonTransactionType'
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
    <>
      <S.CustomTransactionModalStyles />
      <Modal
        data-testid={testId}
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <S.CloseButton onClick={handleCloseModal} />

        <S.Form>
          <h2>New Transaction</h2>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Value" />

          <div>
            <ButtonTransactionType type={'income'} />
            <ButtonTransactionType type={'outcome'} />
          </div>

          <input type="text" placeholder="Category" />

          <button type="submit">Register</button>
        </S.Form>
      </Modal>
    </>
  )
}
