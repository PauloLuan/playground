import { useState, SyntheticEvent } from 'react'
import Modal from 'react-modal'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import * as S from './NewTransactionModal.styles'

export interface NewTransactionModalProps {
  testId?: string
  newTransactionModalIsOpen: boolean
  handleCloseModal?: () => void
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
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [currentTransactionType, setCurrentTransactionType] = useState('')
  const [category, setCategory] = useState('')

  const _handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const data = {
      title,
      amount,
      currentTransactionType,
      category
    }
  }

  return (
    <>
      <S.CustomTransactionModalStyles />
      <Modal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <S.CloseButton onClick={handleCloseModal} />

        <S.Form data-testid={testId} onSubmit={_handleFormSubmit}>
          <h2>New Transaction</h2>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            value={amount}
            onChange={(event) => setAmount(+event.target.value)}
            type="number"
            placeholder="Value"
          />

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

          <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            type="text"
            placeholder="Category"
          />

          <button type="submit">Register</button>
        </S.Form>
      </Modal>
    </>
  )
}
