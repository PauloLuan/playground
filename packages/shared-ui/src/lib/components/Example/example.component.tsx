import * as S from './example.styles'

export interface ExampleProps {
  color?: 'lightGray' | 'primary'
  testId?: string
}

export const Example = ({ color = 'lightGray', testId = 'Example' }: ExampleProps) => {
  return (
    <S.Container>
      <S.Wrapper color={color} data-testid={testId}>
        <S.Header>Paulo Luan é o brabo</S.Header>
      </S.Wrapper>
    </S.Container>
  )
}
