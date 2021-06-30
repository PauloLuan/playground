import { Header, Summary, Transactions } from '../../components'
import { TransactionsProvider } from '../../providers'
import * as S from './Home.styles'
export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'Home' }: HomeProps) => {
  return (
    <S.Container data-testid={testId}>
      <TransactionsProvider>
        <Header />
        <Summary />
        <Transactions />
      </TransactionsProvider>
    </S.Container>
  )
}
