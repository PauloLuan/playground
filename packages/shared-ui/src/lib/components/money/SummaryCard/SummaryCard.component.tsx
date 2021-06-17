import * as S from './SummaryCard.styles'

export interface SummaryCardProps {
  testId?: string
  type: 'income' | 'outcome'
  value: number
}

export const SummaryCard = ({
  testId = 'SummaryCard',
  type,
  value
}: SummaryCardProps) => {
  const formattedMoneyValue = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return (
    <S.Container type={type} data-testid={testId}>
      <S.Header type={type}>
        {type === 'income' ? <span>Deposits</span> : <span>Donations</span>}
        {type === 'income' ? <S.UpIcon /> : <S.DownIcon />}
      </S.Header>
      <strong>{formattedMoneyValue}</strong>
    </S.Container>
  )
}
