import { api } from '../services/axios'
import { createContext, useEffect, useState } from 'react'
import { TransactionType } from 'transaction'

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface TransactionsContextData {
  transactions: TransactionType[]
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

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
