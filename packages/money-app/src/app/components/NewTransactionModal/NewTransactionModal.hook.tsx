import { useState } from 'react'

export const useNewTransactionModal = () => {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] =
    useState(true)

  const handleOpenModal = () => {
    setNewTransactionModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setNewTransactionModalIsOpen(false)
  }

  return { newTransactionModalIsOpen, handleOpenModal, handleCloseModal }
}
