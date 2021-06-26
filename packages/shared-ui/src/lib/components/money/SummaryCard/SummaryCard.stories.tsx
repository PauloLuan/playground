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
  <SummaryCard {...args} type="income" value={954} />
)

export const OutcomeSummary: Story<SummaryCardProps> = (args) => (
  <SummaryCard {...args} type="donation" value={1250} />
)

export const TotalSummary: Story<SummaryCardProps> = (args) => (
  <SummaryCard {...args} type="total" value={1250} />
)
