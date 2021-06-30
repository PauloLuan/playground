import { createContext, useContext, useEffect, useState } from 'react'
import { TransactionType } from 'transaction'
import { api } from '../services/axios'

interface TransactionsProviderProps {
  children: React.ReactNode
}

type TransactionFormType = Pick<
  TransactionType,
  'name' | 'amount' | 'transactionCategory' | 'category'
>

interface TransactionsContextData {
  transactions: TransactionType[]
  addTransaction: (data: TransactionFormType) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
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

  const addTransaction = async (data: TransactionFormType) => {
    const response = await api.post('/transactions', data)
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}
