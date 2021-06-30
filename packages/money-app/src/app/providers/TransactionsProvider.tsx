import { createContext, useEffect, useState } from 'react'
import { TransactionType } from 'transaction'
import { api } from '../services/axios'

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface TransactionsContextData {
  transactions: TransactionType[]
  addTransaction: (data: TransactionType) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({
  children
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const remoteTransactions = await api.get('/transactions')
      setTransactions(remoteTransactions.data.transactions)
    }

    fetchData()
  }, [])

  const addTransaction = async (data: TransactionType) => {
    await api.post('/transactions', data)

    setTransactions([...transactions, data])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
