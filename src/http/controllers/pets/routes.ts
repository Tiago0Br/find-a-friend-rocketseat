import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { registerPet } from './register-pet'
import { findAllPets } from './find-all-pets'
import { findPetById } from './find-pet-by-id'
import { findPetsByFilters } from './find-pets-by-filters'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', findAllPets)
  app.get('/pets/:id', findPetById)
  app.get('/pets/search', findPetsByFilters)
  app.post('/pets', { onRequest: [verifyJWT] }, registerPet)
}
