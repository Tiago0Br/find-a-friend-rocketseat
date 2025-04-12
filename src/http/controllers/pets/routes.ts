import { FastifyInstance } from 'fastify'
import { registerPet } from './register-pet'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { findAllPets } from './find-all-pets'
import { findPetById } from './find-pet-by-id'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', findAllPets)
  app.get('/pets/:id', findPetById)
  app.post('/pets', { onRequest: [verifyJWT] }, registerPet)
}
