import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'Header' }: HeaderProps) => {
  return (
    <S.Container>
      <S.Wrapper data-testid={testId}>
        <S.Header>Paulo Luan é o brabo</S.Header>
      </S.Wrapper>
    </S.Container>
  )
}
