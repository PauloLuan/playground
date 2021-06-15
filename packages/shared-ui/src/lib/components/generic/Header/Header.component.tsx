import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'Header' }: HeaderProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Logo>Logo Example</S.Logo>

      <S.RightWrapper>
        <S.Link>Teste 1</S.Link>
        <S.Link>Teste 2</S.Link>
        <S.Link>Teste 3</S.Link>
      </S.RightWrapper>
    </S.Container>
  )
}
