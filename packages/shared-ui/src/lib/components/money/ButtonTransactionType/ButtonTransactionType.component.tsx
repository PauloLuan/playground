import * as S from './ButtonTransactionType.styles'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export interface ButtonTransactionTypeProps {
  type: 'income' | 'donation'
  testId?: string
}

const IncomeButton = ({ type }: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction type={type}>
      <FaArrowUp />
      <span>Income</span>
    </S.ButtonTransaction>
  </>
)
const DonationButton = ({ type }: ButtonTransactionTypeProps) => (
  <>
    <S.ButtonTransaction type={type}>
      <FaArrowDown />
      <span>Donation</span>
    </S.ButtonTransaction>
  </>
)

export const ButtonTransactionType = ({
  type,
  testId = 'ButtonTransactionType'
}: ButtonTransactionTypeProps) => {
  return (
    <>
      {type === 'income' ? (
        <IncomeButton type={type} />
      ) : (
        <DonationButton type={type} />
      )}
    </>
  )
}
