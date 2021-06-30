declare module 'transaction' {
  export type TransactionType = {
    _id: string | number
    name: string
    amount: number
    category?: 'Mindingo' | 'ONG' | 'Institute'
    transactionCategory: 'income' | 'donation'
    createdAt?: Date
  }
}
