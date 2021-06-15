import * as S from './Summary.styles'

export interface SummaryProps {
  testId?: string
}

export const Summary = ({ testId = 'Summary' }: SummaryProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>Summary</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
