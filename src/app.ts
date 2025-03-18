import fastify from 'fastify'
import { petsRoutes } from './http/controllers/pets/routes'
import { orgsRoutes } from './http/controllers/orgs/routes'
import { errorHandler } from './http/middlewares/error-handler'

export const app = fastify()

app.setErrorHandler(errorHandler)

app.register(petsRoutes)
app.register(orgsRoutes)
