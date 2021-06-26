import { money } from '@pauloluan/shared-ui'
const { SummaryCard } = money
import * as S from './Summary.styles'

export interface SummaryProps {
  testId?: string
}

export const Summary = ({ testId = 'Summary' }: SummaryProps) => {
  return (
    <S.Container data-testid={testId}>
      <SummaryCard type="income" value={100} />
      <SummaryCard type="donation" value={100} />
      <SummaryCard type="total" value={200} />
    </S.Container>
  )
}
