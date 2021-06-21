import { createServer } from 'miragejs'

const startMirage = () => {
  createServer({
    routes() {
      this.namespace = 'api'
      this.get('/users', () => {
        return [1, 2, 3]
      })
    }
  })
}

export { startMirage }
