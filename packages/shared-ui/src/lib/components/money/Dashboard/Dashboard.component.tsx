import * as S from './Dashboard.styles'

export interface DashboardProps {
  testId?: string
}

export const Dashboard = ({ testId = 'Dashboard' }: DashboardProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Main>Dashboard</S.Main>
      </S.Wrapper>
    </S.Container>
  )
}
