import * as S from './TransactionItem.styles'

export interface TransactionItemProps {
  testId?: string
}

export const TransactionItem = ({ testId = 'TransactionItem' }: TransactionItemProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>TransactionItem</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
