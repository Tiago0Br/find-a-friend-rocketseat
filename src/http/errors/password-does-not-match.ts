import { DomainError } from './domain-error'

export class PasswordDoesNotMatch extends DomainError {
  public static create() {
    return new this('Password does not match')
  }
}
