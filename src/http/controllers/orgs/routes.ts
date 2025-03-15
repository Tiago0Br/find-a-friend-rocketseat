import { FastifyInstance } from 'fastify'
import { registerOrganization } from './register-org'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/orgs', registerOrganization)
}
