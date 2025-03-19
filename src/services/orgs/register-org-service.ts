import bcrypt from 'bcrypt'
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

    const passwordHash = await bcrypt.hash(orgData.password, 6)

    const org = await this.orgRepository.create({
      responsibleName: orgData.responsibleName,
      email: orgData.email,
      password: passwordHash,
      zipcode: orgData.zipcode,
      address: orgData.address,
      district: orgData.district,
      number: orgData.number,
      complement: orgData.complement,
      city: orgData.city,
      state: orgData.state,
      whatsapp: orgData.whatsapp
    })

    return {
      id: org.id
    }
  }
}
