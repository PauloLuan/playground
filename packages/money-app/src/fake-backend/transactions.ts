import { createServer, Model } from 'miragejs'
import { data as transactions } from './transaction-mock-data'
import { v4 as uuidv4 } from 'uuid'

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
        const inputData = JSON.parse(request.requestBody)

        const saveData = {
          ...inputData,
          id: uuidv4(),
          createdAt: new Date()
        }

        return this.schema.create('transaction', saveData)
      })
    }
  })
}

export { startMirage }
