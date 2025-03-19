import bcrypt from 'bcrypt'
import { Organization } from '@prisma/client'
import { OrgRepository } from '@/repositories/org-repository'

interface AuthenticateOrgServiceRequest {
  email: string
  password: string
}

interface AuthenticateOrgServiceResponse {
  org: Organization
}

export class AuthenticateOrgService {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    email,
    password
  }: AuthenticateOrgServiceRequest): Promise<AuthenticateOrgServiceResponse> {
    const org = await this.orgRepository.findByEmail(email)

    if (!org) {
      throw new Error('Invalid credentials')
    }

    const doesPasswordMatch = await bcrypt.compare(password, org.password)

    if (!doesPasswordMatch) {
      throw new Error('Invalid credentials')
    }

    return {
      org
    }
  }
}
