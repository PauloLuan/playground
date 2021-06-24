import * as S from './ButtonTransactionType.styles'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export interface ButtonTransactionTypeProps {
  transactionType: 'income' | 'donation'
  isSelected?: boolean
  testId?: string
}

const IncomeButton = ({
  isSelected,
  transactionType
}: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction
      isSelected={isSelected}
      transactionType={transactionType}
    >
      <FaArrowUp />
      <span>Income</span>
    </S.ButtonTransaction>
  </>
)
const DonationButton = ({
  isSelected,
  transactionType
}: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction
      isSelected={isSelected}
      transactionType={transactionType}
    >
      <FaArrowDown />
      <span>Donation</span>
    </S.ButtonTransaction>
  </>
)

export const ButtonTransactionType = ({
  transactionType,
  isSelected = false,
  testId = 'ButtonTransactionType'
}: ButtonTransactionTypeProps) => {
  return (
    <>
      {transactionType === 'income' ? (
        <IncomeButton
          isSelected={isSelected}
          transactionType={transactionType}
        />
      ) : (
        <DonationButton
          isSelected={isSelected}
          transactionType={transactionType}
        />
      )}
    </>
  )
}
