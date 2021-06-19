import * as S from './TransactionTable.styles'

export interface TransactionTableProps {
  testId?: string
}

export const TransactionTable = ({
  testId = 'TransactionTable'
}: TransactionTableProps) => {
  return (
    <S.Container>
      <S.Table data-testid={testId}>
        <thead>
          <th>Name</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>Received</td>
            <td className="income">12865</td>
            <td>Income</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>José Oswaldo dos Santos</td>
            <td className="donation">789</td>
            <td>Mindingo</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>AACD</td>
            <td className="donation">337</td>
            <td>ONG</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Agnaldo Gonçalves</td>
            <td className="donation">596</td>
            <td>Mindingo</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Received</td>
            <td className="income">2987</td>
            <td>Income</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Associação dos anões Cientistas</td>
            <td className="donation">3654</td>
            <td>Instituto de Pesquisa</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}
