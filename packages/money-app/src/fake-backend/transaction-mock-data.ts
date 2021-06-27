import { TransactionType } from 'transaction'

export const data: TransactionType[] = [
  {
    _id: 1,
    name: 'Rich Donator',
    amount: 12865,
    transactionCategory: 'income',
    createdAt: new Date('10/02/2021')
  },
  {
    _id: 2,
    name: 'José Oswaldo dos Santos',
    amount: 789,
    category: 'Mindingo',
    transactionCategory: 'donation',
    createdAt: null
  },
  {
    _id: 3,
    name: 'AACD',
    amount: 337,
    category: 'ONG',
    transactionCategory: 'donation',
    createdAt: new Date('10/02/2021')
  },
  {
    _id: 4,
    name: 'Agnaldo Gonçalves',
    amount: 596,
    category: 'Mindingo',
    transactionCategory: 'donation',
    createdAt: new Date('10/02/2021')
  },
  {
    _id: 5,
    name: 'Received',
    amount: 2987,
    transactionCategory: 'income',
    createdAt: new Date('10/02/2021')
  },
  {
    _id: 6,
    name: 'Associação dos anões Cientistas',
    amount: 3654,
    category: 'Institute',
    transactionCategory: 'donation',
    createdAt: new Date('10/02/2021')
  }
]
