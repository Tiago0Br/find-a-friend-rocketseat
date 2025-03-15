import fastify from 'fastify'
import { petsRoutes } from './http/controllers/pets/routes'
import { errorHandler } from './http/middlewares/error-handler'

export const app = fastify()

app.setErrorHandler(errorHandler)

app.register(petsRoutes)
