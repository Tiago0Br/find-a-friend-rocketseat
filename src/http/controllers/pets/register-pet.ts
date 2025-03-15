import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { registerPetSchema } from '@/schemas/pet-schema'
import { RegisterPetService } from '@/services/pets/register-pet-service'
export async function registerPet(request: FastifyRequest, reply: FastifyReply) {
  const data = registerPetSchema.parse(request.body)

  const prismaPetRepository = new PrismaPetRepository()
  const registerPetService = new RegisterPetService(prismaPetRepository)

  const { id } = await registerPetService.execute({
    data
  })

  return reply.status(201).send({ id })
}
