import { OrgRepository } from '@/repositories/org-repository'
import { Prisma } from '@prisma/client'

interface RegisterOrgServiceRequest {
  orgData: Prisma.OrganizationUncheckedCreateInput
}

interface RegisterOrgServiceResponse {
  id: string
}

export class RegisterOrgService {
  constructor(private orgRepository: OrgRepository) {}

  async execute({ orgData }: RegisterOrgServiceRequest): Promise<RegisterOrgServiceResponse> {
    const org = await this.orgRepository.create(orgData)

    return {
      id: org.id
    }
  }
}
