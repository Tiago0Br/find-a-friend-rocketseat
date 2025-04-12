import { FastifyReply, FastifyRequest } from 'fastify'
import { registerPetSchema } from '@/schemas/pet-schema'
import { makeRegisterPetService } from '@/factories/make-register-pet-service'
export async function registerPet(request: FastifyRequest, reply: FastifyReply) {
  const petData = registerPetSchema.parse(request.body)
  const organizationId = request.user.sign.sub
  const registerPetService = makeRegisterPetService()

  const { id } = await registerPetService.execute({
    petData,
    organizationId
  })

  return reply.status(201).send({ id })
}
