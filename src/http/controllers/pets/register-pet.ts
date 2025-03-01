import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { RegisterPetService } from '@/services/register-pet-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const petBodySchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.number(),
    size: z.string(),
    energy: z.string(),
    independence: z.string(),
    environment: z.string()
  })

  const pet = petBodySchema.safeParse(request.body)

  if (!pet.success) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: pet.error.format()
    })
  }

  const prismaPetRepository = new PrismaPetRepository()
  const registerPetService = new RegisterPetService(prismaPetRepository)

  const { id } = await registerPetService.execute({
    data: pet.data
  })

  return reply.status(201).send({ id })
}
