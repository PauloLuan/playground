import * as S from './TransactionTable.styles'

export interface TransactionTableProps {
  testId?: string
}

export type TransactionType = {
  _id: string | number
  name: string
  amount: number
  category?: 'Mindingo' | 'ONG' | 'Institute'
  transactionCategory: 'income' | 'donation'
  createdAt: Date
}

export const TransactionTable = ({
  testId = 'TransactionTable'
}: TransactionTableProps) => {
  const data: TransactionType[] = [
    {
      _id: 1,
      name: 'Rich Donator',
      amount: 12865,
      transactionCategory: 'income',
      createdAt: new Date('10/02/2021')
    },
    {
      _id: 2,
      name: 'José Oswaldo dos Santos',
      amount: 789,
      category: 'Mindingo',
      transactionCategory: 'donation',
      createdAt: new Date('10/02/2021')
    },
    {
      _id: 3,
      name: 'AACD',
      amount: 337,
      category: 'ONG',
      transactionCategory: 'donation',
      createdAt: new Date('10/02/2021')
    },
    {
      _id: 4,
      name: 'Agnaldo Gonçalves',
      amount: 596,
      category: 'Mindingo',
      transactionCategory: 'donation',
      createdAt: new Date('10/02/2021')
    },
    {
      _id: 5,
      name: 'Received',
      amount: 2987,
      transactionCategory: 'income',
      createdAt: new Date('10/02/2021')
    },
    {
      _id: 6,
      name: 'Associação dos anões Cientistas',
      amount: 3654,
      category: 'Institute',
      transactionCategory: 'donation',
      createdAt: new Date('10/02/2021')
    }
  ]

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
          {data.map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td className={data.transactionCategory}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(data.amount)}
              </td>
              <td className={data.transactionCategory}>
                {data.transactionCategory}
              </td>
              <td>{data.createdAt.toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  )
}
