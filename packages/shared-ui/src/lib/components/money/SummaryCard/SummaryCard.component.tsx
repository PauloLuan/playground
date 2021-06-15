import * as S from './SummaryCard.styles'

export interface SummaryCardProps {
  testId?: string
  type: 'income' | 'outcome'
}

export const SummaryCard = ({
  testId = 'SummaryCard',
  type
}: SummaryCardProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Header>
        {type === 'income' ? <span>Deposits</span> : <span>Donations</span>}
        {type === 'income' ? <S.UpIcon /> : <S.DownIcon />}
        <span>R$1000</span>
      </S.Header>
    </S.Container>
  )
}
