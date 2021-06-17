import * as S from './TransactionTable.styles'

export interface TransactionTableProps {
  testId?: string
}

export const TransactionTable = ({
  testId = 'TransactionTable'
}: TransactionTableProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>TransactionTable</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
