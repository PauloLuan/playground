import { Meta, Story } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from '.'

export default {
  title: 'money/Header',
  component: Header,
  args: {
    size: 'large'
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
