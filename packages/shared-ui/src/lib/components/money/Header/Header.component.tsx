import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'Header' }: HeaderProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Content>
        <S.LogoImage />
        <S.Button>New Donation</S.Button>
      </S.Content>
    </S.Container>
  )
}
