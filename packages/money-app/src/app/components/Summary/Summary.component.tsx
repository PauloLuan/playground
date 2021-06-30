import { TransactionType } from 'transaction'
import { SummaryCard } from '../'
import { useTransactions } from '../../providers'
import * as S from './Summary.styles'

export interface SummaryProps {
  testId?: string
}

const calculateTotals = (transactions: TransactionType[]) => {
  const { incomes, donations, total } = transactions.reduce(
    (acc, transaction) => {
      const IS_INCOME = transaction.transactionCategory === 'income'
      const IS_DONATION = transaction.transactionCategory === 'donation'

      if (IS_INCOME) acc.incomes += transaction.amount
      if (IS_DONATION) acc.donations += transaction.amount

      acc.total += transaction.amount

      return acc
    },
    {
      incomes: 0,
      donations: 0,
      total: 0
    }
  )

  return { incomes, donations, total }
}

export const Summary = ({ testId = 'Summary' }: SummaryProps) => {
  const { transactions } = useTransactions()

  const { incomes, donations, total } = calculateTotals(transactions)

  return (
    <S.Container data-testid={testId}>
      <SummaryCard type="income" value={incomes} />
      <SummaryCard type="donation" value={donations} />
      <SummaryCard type="total" value={total} />
    </S.Container>
  )
}
