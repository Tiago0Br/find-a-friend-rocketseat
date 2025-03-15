import { Prisma, Organization } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { OrgRepository } from '../org-repository'

export class PrismaOrgRepository implements OrgRepository {
  create(data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization> {
    return prisma.organization.create({ data })
  }
}
