import * as S from './SummaryCard.styles'

export interface SummaryCardProps {
  testId?: string
  type: 'income' | 'donation' | 'total'
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
        {type === 'income' && <span>Incomes</span>}
        {type === 'donation' && <span>Donations</span>}
        {type === 'total' && <span>Total</span>}
        {type === 'income' && <S.UpIcon />}
        {type === 'donation' && <S.DownIcon />}
        {type === 'total' && <S.MoneyIcon />}
      </S.Header>
      <strong>{formattedMoneyValue}</strong>
    </S.Container>
  )
}
