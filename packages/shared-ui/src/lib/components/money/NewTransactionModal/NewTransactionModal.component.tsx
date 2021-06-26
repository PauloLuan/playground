import { useState } from 'react'
import Modal from 'react-modal'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import * as S from './NewTransactionModal.styles'
export interface NewTransactionModalProps {
  testId?: string
  newTransactionModalIsOpen: boolean
  handleCloseModal: () => void
}

export interface ButtonTransactionTypeProps {
  transactionType: 'income' | 'donation'
  isSelected?: boolean
  testId?: string
}

export const NewTransactionModal = ({
  testId = 'NewTransactionModal',
  newTransactionModalIsOpen,
  handleCloseModal
}: NewTransactionModalProps) => {
  const [currentTransactionType, setCurrentTransactionType] = useState('')

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
            <S.TransactionButton
              onClick={() => setCurrentTransactionType('income')}
              isSelected={currentTransactionType === 'income'}
              transactionType={'income'}
            >
              <FaArrowUp />
              <span>Income</span>
            </S.TransactionButton>
            <S.TransactionButton
              onClick={() => setCurrentTransactionType('donation')}
              isSelected={currentTransactionType === 'donation'}
              transactionType={'donation'}
            >
              <FaArrowDown />
              <span>Donation</span>
            </S.TransactionButton>
          </div>

          <input type="text" placeholder="Category" />

          <button type="submit">Register</button>
        </S.Form>
      </Modal>
    </>
  )
}
