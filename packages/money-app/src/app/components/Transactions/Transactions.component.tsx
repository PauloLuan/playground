import { money } from '@pauloluan/shared-ui'
const { TransactionTable } = money

import * as S from './Transactions.styles'

export interface TransactionsProps {
  testId?: string
}

export const Transactions = ({
  testId = 'Transactions'
}: TransactionsProps) => {
  return (
    <S.Container data-testid={testId}>
      <TransactionTable />
    </S.Container>
  )
}
