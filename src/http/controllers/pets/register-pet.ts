import { FastifyReply, FastifyRequest } from 'fastify'
import { registerPetSchema } from '@/schemas/pet-schema'
import { makeRegisterPetService } from '@/factories/make-register-pet-service'
export async function registerPet(request: FastifyRequest, reply: FastifyReply) {
  const petData = registerPetSchema.parse(request.body)
  const registerPetService = makeRegisterPetService()

  const { id } = await registerPetService.execute({ petData })

  return reply.status(201).send({ id })
}
