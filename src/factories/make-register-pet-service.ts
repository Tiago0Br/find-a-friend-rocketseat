import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { RegisterPetService } from '@/services/pets/register-pet-service'

export function makeRegisterPetService() {
  const prismaPetRepository = new PrismaPetRepository()
  return new RegisterPetService(prismaPetRepository)
}
