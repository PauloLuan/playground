import { Story, Meta } from '@storybook/react/types-6-0'
import { Sidebar, SidebarProps } from '.'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<SidebarProps> = (args) => <Sidebar {...args} />
