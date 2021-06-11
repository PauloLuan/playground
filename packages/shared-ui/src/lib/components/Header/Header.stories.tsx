import { Story, Meta } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from '.'

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
