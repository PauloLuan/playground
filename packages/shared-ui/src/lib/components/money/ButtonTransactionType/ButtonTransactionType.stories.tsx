import { Story, Meta } from '@storybook/react/types-6-0'
import { ButtonTransactionType, ButtonTransactionTypeProps } from '.'

export default {
  title: 'money/ButtonTransactionType',
  component: ButtonTransactionType,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const DonationButton: Story<ButtonTransactionTypeProps> = (args) => (
  <ButtonTransactionType {...args} type={'donation'} />
)

export const IncomeButton: Story<ButtonTransactionTypeProps> = (args) => (
  <ButtonTransactionType {...args} type={'income'} />
)
