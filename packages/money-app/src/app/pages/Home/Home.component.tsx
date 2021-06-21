import { Header } from '@pauloluan/shared-ui'
import { Summary, Transactions } from '../../components'

import * as S from './Home.styles'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'Home' }: HomeProps) => {
  return (
    <S.Container data-testid={testId}>
      <Header />
      <Summary />
      <Transactions />
    </S.Container>
  )
}
