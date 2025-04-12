import { makeFindPetByIdService } from '@/factories/make-find-pet-by-id-service'
import { findPetByIdSchema } from '@/schemas/pet-schema'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findPetById(request: FastifyRequest, reply: FastifyReply) {
  const { id } = findPetByIdSchema.parse(request.params)

  const findPetByIdService = makeFindPetByIdService()

  const { pet } = await findPetByIdService.execute({ id })

  return reply.status(200).send({ pet })
}
