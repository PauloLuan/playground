import { Story, Meta } from '@storybook/react/types-6-0'
import { SummaryCard, SummaryCardProps } from '.'

export default {
  title: 'money/SummaryCard',
  component: SummaryCard,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<SummaryCardProps> = (args) => (
  <SummaryCard {...args} />
)
