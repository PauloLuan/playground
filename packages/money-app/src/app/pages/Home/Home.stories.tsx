import { Story, Meta } from '@storybook/react/types-6-0'
import { Home, HomeProps } from '.'

export default {
  title: 'Components/Home',
  component: Home,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<HomeProps> = (args) => <Home {...args} />
