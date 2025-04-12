import { UnauthorizedError } from './unauthorized-error'

export class InvalidTokenError extends UnauthorizedError {
  static throw() {
    return new this('Unauthorized')
  }
}
