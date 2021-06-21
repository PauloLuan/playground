import { useState } from 'react'

export const useNewTransactionModal = () => {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] =
    useState(false)

  const handleOpenModal = () => {
    setNewTransactionModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setNewTransactionModalIsOpen(false)
  }

  return { newTransactionModalIsOpen, handleOpenModal, handleCloseModal }
}
