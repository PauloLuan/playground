import { Story, Meta } from '@storybook/react/types-6-0'
import { Example, ExampleProps } from '.'

export default {
  title: 'Components/Example',
  component: Example,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<ExampleProps> = (args) => <Example {...args} />
