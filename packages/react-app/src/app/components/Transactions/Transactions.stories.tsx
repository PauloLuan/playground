import { Story, Meta } from '@storybook/react/types-6-0'
import { Transactions, TransactionsProps } from '.'

export default {
  title: 'Components/Transactions',
  component: Transactions,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<TransactionsProps> = (args) => (
  <Transactions {...args} />
)
