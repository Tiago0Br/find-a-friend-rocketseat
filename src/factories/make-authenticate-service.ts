import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { AuthenticateOrgService } from '@/services/orgs/authenticate-service'

export function makeAuthenticateService() {
  const orgRepository = new PrismaOrgRepository()
  return new AuthenticateOrgService(orgRepository)
}
