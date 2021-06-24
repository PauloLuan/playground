import * as S from './ButtonTransactionType.styles'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export interface ButtonTransactionTypeProps {
  transactionType: 'income' | 'donation'
  testId?: string
}

const IncomeButton = ({ transactionType }: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction transactionType={transactionType}>
      <FaArrowUp />
      <span>Income</span>
    </S.ButtonTransaction>
  </>
)
const DonationButton = ({ transactionType }: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction transactionType={transactionType}>
      <FaArrowDown />
      <span>Donation</span>
    </S.ButtonTransaction>
  </>
)

export const ButtonTransactionType = ({
  transactionType,
  testId = 'ButtonTransactionType'
}: ButtonTransactionTypeProps) => {
  return (
    <>
      {transactionType === 'income' ? (
        <IncomeButton transactionType={transactionType} />
      ) : (
        <DonationButton transactionType={transactionType} />
      )}
    </>
  )
}
