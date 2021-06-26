import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
  newDonationAction: () => void
}

export const Header = ({
  testId = 'Header',
  newDonationAction
}: HeaderProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Content>
        <S.LogoImage />
        <S.Button onClick={newDonationAction}>New Donation</S.Button>
      </S.Content>
    </S.Container>
  )
}
