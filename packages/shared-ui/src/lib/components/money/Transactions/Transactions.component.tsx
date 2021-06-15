import * as S from './Transactions.styles'

export interface TransactionsProps {
  testId?: string
}

export const Transactions = ({ testId = 'Transactions' }: TransactionsProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>Transactions</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
