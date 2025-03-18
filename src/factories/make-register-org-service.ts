import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { RegisterOrgService } from '@/services/orgs/register-org-service'

export function makeRegisterOrgService() {
  const orgRepository = new PrismaOrgRepository()
  return new RegisterOrgService(orgRepository)
}
