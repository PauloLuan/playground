import * as S from './Sidebar.styles'

export interface SidebarProps {
  testId?: string
}

export const Sidebar = ({ testId = 'Sidebar' }: SidebarProps) => {
  return <S.Container data-testid={testId}>Sidebar</S.Container>
}
