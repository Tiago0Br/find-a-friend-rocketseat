import { DomainError } from './domain-error'

export class OrgAlreadyExists extends DomainError {
  public static create() {
    return new this('Organization already exists')
  }
}
