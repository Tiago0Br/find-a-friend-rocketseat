import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { env } from '@/env'
import { DomainError, UnauthorizedError } from '../errors'

interface Response {
  message: string
  statusCode: number
  issues?: string[]
}

export function errorHandler(error: FastifyError, _: FastifyRequest, reply: FastifyReply) {
  const response: Response = {
    message: error.message,
    statusCode: 500
  }

  if (error instanceof ZodError) {
    response.statusCode = 400
    response.message = 'Validation error'
    response.issues = error.errors.map((issue) => issue.message)
  }

  if (error instanceof UnauthorizedError) {
    response.statusCode = 401
  }

  if (error instanceof DomainError) {
    response.statusCode = 409
  }

  if (response.statusCode === 500 && env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(response.statusCode).send({
    message: response.statusCode === 500 ? 'Internal server error' : response.message,
    issues: response.issues
  })
}
