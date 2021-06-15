import { Story, Meta } from '@storybook/react/types-6-0'
import { TransactionItem, TransactionItemProps } from '.'

export default {
  title: 'money/TransactionItem',
  component: TransactionItem,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<TransactionItemProps> = (args) => <TransactionItem {...args} />
