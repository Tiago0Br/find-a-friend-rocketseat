import { makeFindPetsByFiltersService } from '@/factories/make-find-pets-by-filters-service'
import { findPetsByFiltersSchema } from '@/schemas/pet-schema'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findPetsByFilters(request: FastifyRequest, reply: FastifyReply) {
  const filters = findPetsByFiltersSchema.parse(request.query)

  const findPetsByFiltersService = makeFindPetsByFiltersService()

  const { pets } = await findPetsByFiltersService.execute({
    filters
  })

  return reply.status(200).send({ pets })
}
