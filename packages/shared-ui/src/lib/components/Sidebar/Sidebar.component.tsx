import * as S from './Sidebar.styles'
import { ActionButton } from './Sidebar.styles'

export interface SidebarProps {
  testId?: string
}

export const Sidebar = ({ testId = 'Sidebar' }: SidebarProps) => {
  return <S.Container>MINDINGO</S.Container>
}
