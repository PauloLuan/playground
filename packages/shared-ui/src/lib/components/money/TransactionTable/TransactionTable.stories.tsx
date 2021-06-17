import { Story, Meta } from '@storybook/react/types-6-0'
import { TransactionTable, TransactionTableProps } from '.'

export default {
  title: 'money/TransactionTable',
  component: TransactionTable,
  args: {
    size: 'large'
  }
} as Meta

export const Default: Story<TransactionTableProps> = (args) => (
  <TransactionTable {...args} />
)
