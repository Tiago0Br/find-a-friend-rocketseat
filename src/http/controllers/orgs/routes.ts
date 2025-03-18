import { FastifyInstance } from 'fastify'
import { registerOrganization } from './register-org'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', registerOrganization)
}
