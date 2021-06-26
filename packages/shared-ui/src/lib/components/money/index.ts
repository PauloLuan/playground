import * as Header from './Header'
import * as NewTransactionModal from './NewTransactionModal'
import * as SummaryCard from './SummaryCard'
import * as TransactionTable from './TransactionTable'

const money = {
  ...Header,
  ...SummaryCard,
  ...TransactionTable,
  ...NewTransactionModal
}

export { money }
