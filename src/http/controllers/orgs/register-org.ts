import { FastifyReply, FastifyRequest } from 'fastify'
import { makeRegisterOrgService } from '@/factories/make-register-org-service'
import { registerOrgSchema } from '@/schemas/org-schema'

export async function registerOrganization(request: FastifyRequest, reply: FastifyReply) {
  const orgData = registerOrgSchema.parse(request.body)
  const registerOrgService = makeRegisterOrgService()

  const { id } = await registerOrgService.execute({
    orgData
  })

  return reply.status(201).send({ id })
}
