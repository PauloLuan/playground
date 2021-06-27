import { createServer, Model } from 'miragejs'

const startMirage = () => {
  createServer({
    models: {
      transaction: Model
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
