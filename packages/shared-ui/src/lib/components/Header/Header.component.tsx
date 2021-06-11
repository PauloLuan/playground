import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'Header' }: HeaderProps) => {
  return (
    <S.Container>
      <S.Nav data-testid={testId}>
        <S.LogoContainer>
          <S.Logo />
        </S.LogoContainer>

        <S.NavigationContainer>
          <S.NavigationLink />
          <S.NavigationLink />
          <S.NavigationLink />
        </S.NavigationContainer>

        <S.CallToActionContainer>
          <S.ActionButton></S.ActionButton>
        </S.CallToActionContainer>
      </S.Nav>
    </S.Container>
  )
}
