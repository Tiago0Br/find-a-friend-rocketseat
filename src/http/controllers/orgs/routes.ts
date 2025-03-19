import { FastifyInstance } from 'fastify'
import { registerOrganization } from './register-org'
import { authenticate } from './authenticate'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', registerOrganization)
  app.post('/orgs/authenticate', authenticate)
}
