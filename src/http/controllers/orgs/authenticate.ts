import { makeAuthenticateService } from '@/factories/make-authenticate-service'
import { authenticateOrgSchema } from '@/schemas/org-schema'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authenticateOrgService = makeAuthenticateService()

  const { email, password } = authenticateOrgSchema.parse(request.body)

  const { org } = await authenticateOrgService.execute({
    email,
    password
  })

  const token = await reply.jwtSign({
    sign: {
      sub: org.id
    }
  })

  const refreshToken = await reply.jwtSign({
    sign: {
      sub: org.id,
      expiresIn: '8h'
    }
  })

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/',
      secure: true,
      sameSite: true,
      httpOnly: true
    })
    .status(201)
    .send({
      token
    })
}
