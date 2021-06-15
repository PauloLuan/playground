import { Story, Meta } from '@storybook/react/types-6-0'
import { Dashboard, DashboardProps } from '.'

export default {
  title: 'money/Dashboard',
  component: Dashboard,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<DashboardProps> = (args) => <Dashboard {...args} />
