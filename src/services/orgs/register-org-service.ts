import { Prisma } from '@prisma/client'
import { OrgAlreadyExists, PasswordDoesNotMatch } from '@/http/errors'
import { OrgRepository } from '@/repositories/org-repository'

interface RegisterOrgServiceRequest {
  orgData: Prisma.OrganizationUncheckedCreateInput & { passwordConfirm: string }
}

interface RegisterOrgServiceResponse {
  id: string
}

export class RegisterOrgService {
  constructor(private orgRepository: OrgRepository) {}

  async execute({ orgData }: RegisterOrgServiceRequest): Promise<RegisterOrgServiceResponse> {
    if (orgData.password !== orgData.passwordConfirm) {
      throw PasswordDoesNotMatch.create()
    }

    const orgAlreadyExists = await this.orgRepository.findByEmail(orgData.email)
    if (orgAlreadyExists) {
      throw OrgAlreadyExists.create()
    }

    const org = await this.orgRepository.create(orgData)

    return {
      id: org.id
    }
  }
}
