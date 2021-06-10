import * as S from './logo.styles'

export interface LogoProps {
  color?: 'lightGray' | 'primary'
  testId?: string
}

export const Logo = ({ color = 'lightGray', testId = 'Logo' }: LogoProps) => {
  return (
    <S.Container>
      <S.Wrapper color={color} data-testid={testId}>
        <S.Header>Paulo Luan é o brabo</S.Header>
      </S.Wrapper>
    </S.Container>
  )
}
