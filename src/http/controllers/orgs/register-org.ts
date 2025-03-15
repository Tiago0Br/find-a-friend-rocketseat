import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { registerOrgSchema } from '@/schemas/org-schema'
import { RegisterOrgService } from '@/services/orgs/register-org-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function registerOrganization(request: FastifyRequest, reply: FastifyReply) {
  const orgData = registerOrgSchema.parse(request.body)

  const orgRepository = new PrismaOrgRepository()
  const registerOrgService = new RegisterOrgService(orgRepository)

  const { id } = await registerOrgService.execute({
    orgData
  })

  return reply.status(201).send({ id })
}
