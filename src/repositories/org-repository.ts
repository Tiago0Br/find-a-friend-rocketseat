import { Organization, Prisma } from '@prisma/client'

export interface OrgRepository {
  create(data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization>
}
