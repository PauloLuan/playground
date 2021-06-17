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
            <td>José Oswaldo dos Santos</td>
            <td>1000</td>
            <td>Mindingo</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>AACD</td>
            <td>1000</td>
            <td>ONG</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Agnaldo Gonçalves</td>
            <td>1000</td>
            <td>Mindingo</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Associação dos anões Cientistas</td>
            <td>1000</td>
            <td>Instituto de Pesquisa</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}
