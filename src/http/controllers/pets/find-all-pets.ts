import { MakeFindAllPetsService } from '@/factories/make-find-all-pets-service'
import { findAllPetsSchema } from '@/schemas/pet-schema'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findAllPets(request: FastifyRequest, reply: FastifyReply) {
  const { city } = findAllPetsSchema.parse(request.query)

  const findAllPetsService = MakeFindAllPetsService()
  const { pets } = await findAllPetsService.execute({ city })

  return reply.status(200).send({ pets })
}
