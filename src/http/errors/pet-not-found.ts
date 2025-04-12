import { NotFoundError } from './not-found-error'

export class PetNotFound extends NotFoundError {
  static byId(id: string) {
    return new this(`Pet with id ${id} not found`)
  }
}
