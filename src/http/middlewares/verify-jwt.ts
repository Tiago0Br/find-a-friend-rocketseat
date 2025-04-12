import { FastifyReply, FastifyRequest } from 'fastify'
import { InvalidTokenError } from '@/http/errors'

export async function verifyJWT(request: FastifyRequest, _: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (error) {
    throw InvalidTokenError.throw()
  }
}
