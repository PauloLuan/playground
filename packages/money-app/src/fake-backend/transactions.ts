import { createServer, Model } from 'miragejs'
import { data as transactions } from './transaction-mock-data'

const startMirage = () => {
  createServer({
    models: {
      transaction: Model
    },

    seeds(server) {
      server.db.loadData({
        transactions
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (_, request) => {
        const data = JSON.parse(request.requestBody)
        return this.schema.create('transaction', data)
      })
    }
  })
}

export { startMirage }
