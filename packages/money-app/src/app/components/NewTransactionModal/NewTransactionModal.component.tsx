import { useState, SyntheticEvent } from 'react'
import Modal from 'react-modal'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import * as S from './NewTransactionModal.styles'
import { api } from '../../services/axios'
import { TransactionType } from 'transaction'

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

const NOT_TEST = process.env.NODE_ENV !== 'test'
NOT_TEST && Modal.setAppElement('#root')

export const NewTransactionModal = ({
  testId = 'NewTransactionModal',
  newTransactionModalIsOpen,
  handleCloseModal
}: NewTransactionModalProps) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [transactionCategory, setTransactionCategory] = useState('')
  const [category, setCategory] = useState('')

  const _handleFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    const data: TransactionType = {
      name,
      amount,
      transactionCategory,
      category,
      createdAt: new Date()
    }

    await api.post('/transactions', data)
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
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Donator Name"
          />
          <input
            value={amount}
            onChange={(event) => setAmount(+event.target.value)}
            type="number"
            placeholder="Value"
          />

          <div>
            <S.TransactionButton
              type="button"
              onClick={() => setTransactionCategory('income')}
              isSelected={transactionCategory === 'income'}
              transactionType={'income'}
            >
              <FaArrowUp />
              <span>Income</span>
            </S.TransactionButton>
            <S.TransactionButton
              type="button"
              onClick={() => setTransactionCategory('donation')}
              isSelected={transactionCategory === 'donation'}
              transactionType={'donation'}
            >
              <FaArrowDown />
              <span>Donation</span>
            </S.TransactionButton>
          </div>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Category"
          >
            <option value="Mindingo">Mindingo</option>
            <option value="ONG">ONG</option>
            <option value="Institute">Institute</option>
          </select>

          <button type="submit">Register</button>
        </S.Form>
      </Modal>
    </>
  )
}
