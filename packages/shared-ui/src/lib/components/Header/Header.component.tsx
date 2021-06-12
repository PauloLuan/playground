import * as S from './Header.styles'

export interface HeaderProps {
  color?: 'lightGray' | 'primary'
  testId?: string
}

export const Header = ({ color = 'lightGray', testId = 'Header' }: HeaderProps) => {
  return (
    <S.Container>
      <S.Wrapper color={color} data-testid={testId}>
        <S.Header>Paulo Luan é o brabo</S.Header>
      </S.Wrapper>
    </S.Container>
  )
}
