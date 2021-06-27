declare module 'transaction' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export type TransactionType = {
    _id: string | number
    name: string
    amount: number
    category?: 'Mindingo' | 'ONG' | 'Institute'
    transactionCategory: 'income' | 'donation'
    createdAt?: Date
  }
}
