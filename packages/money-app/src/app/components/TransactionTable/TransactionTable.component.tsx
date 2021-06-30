import { TransactionsContext } from '../../providers'
import { useContext } from 'react'
import * as S from './TransactionTable.styles'

export interface TransactionTableProps {
  testId?: string
}

export const TransactionTable = ({
  testId = 'TransactionTable'
}: TransactionTableProps) => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <S.Container>
      <S.Table data-testid={testId}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.name}</td>
                <td className={transaction.transactionCategory}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td className={transaction.transactionCategory}>
                  {transaction.transactionCategory}
                </td>
                <td>
                  {transaction.createdAt
                    ? new Date(transaction.createdAt).toLocaleDateString(
                        'pt-BR'
                      )
                    : '-'}
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Container>
  )
}
