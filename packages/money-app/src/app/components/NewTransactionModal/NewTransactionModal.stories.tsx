import { Story, Meta } from '@storybook/react/types-6-0'
import {
  NewTransactionModal,
  NewTransactionModalProps,
  useNewTransactionModal
} from '.'

export default {
  title: 'money/NewTransactionModal',
  component: NewTransactionModal,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<NewTransactionModalProps> = (args) => {
  const { handleOpenModal, handleCloseModal, newTransactionModalIsOpen } =
    useNewTransactionModal()
  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <NewTransactionModal
        {...args}
        handleCloseModal={handleCloseModal}
        newTransactionModalIsOpen={newTransactionModalIsOpen}
      />
    </>
  )
}
