import { Prisma, Organization } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { OrgRepository } from '../org-repository'

export class PrismaOrgRepository implements OrgRepository {
  create(data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization> {
    return prisma.organization.create({
      data: {
        responsibleName: data.responsibleName,
        email: data.email,
        password: data.password,
        zipcode: data.zipcode,
        address: data.address,
        district: data.district,
        number: data.number,
        complement: data.complement,
        city: data.city,
        state: data.state,
        whatsapp: data.whatsapp
      }
    })
  }

  findByEmail(email: string): Promise<Organization | null> {
    return prisma.organization.findFirst({ where: { email } })
  }
}
