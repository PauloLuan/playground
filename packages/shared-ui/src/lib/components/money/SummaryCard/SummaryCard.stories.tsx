import { Story, Meta } from '@storybook/react/types-6-0'
import { SummaryCard, SummaryCardProps } from '.'

export default {
  title: 'money/SummaryCard',
  component: SummaryCard,
  args: {
    size: 'large'
  }
} as Meta

export const IncomeSummary: Story<SummaryCardProps> = (args) => (
  <SummaryCard {...args} type="income" />
)

export const OutcomeSummary: Story<SummaryCardProps> = (args) => (
  <SummaryCard {...args} type="outcome" />
)
