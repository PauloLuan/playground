import * as S from './SummaryCard.styles'

export interface SummaryCardProps {
  testId?: string
}

export const SummaryCard = ({ testId = 'SummaryCard' }: SummaryCardProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>SummaryCard</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
