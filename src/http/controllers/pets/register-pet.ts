import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { registerPetSchema } from '@/schemas/pet-schema'
import { RegisterPetService } from '@/services/register-pet-service'
export async function registerPet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { data, success, error } = registerPetSchema.safeParse(request.body)

  if (!success) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.issues.map((issue) => issue.message)
    })
  }

  const prismaPetRepository = new PrismaPetRepository()
  const registerPetService = new RegisterPetService(prismaPetRepository)

  const { id } = await registerPetService.execute({
    data
  })

  return reply.status(201).send({ id })
}
