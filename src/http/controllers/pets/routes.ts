import { FastifyInstance } from 'fastify'
import { registerPet } from './register-pet'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { findAllPets } from './find-all-pets'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', findAllPets)
  app.post('/pets', { onRequest: [verifyJWT] }, registerPet)
}
