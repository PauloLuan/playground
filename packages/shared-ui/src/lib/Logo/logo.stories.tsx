import { Story, Meta } from '@storybook/react/types-6-0'
import { Logo, LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
