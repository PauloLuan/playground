import { Story, Meta } from '@storybook/react/types-6-0'
import { Summary, SummaryProps } from '.'

export default {
  title: 'money/Summary',
  component: Summary,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<SummaryProps> = (args) => <Summary {...args} />
