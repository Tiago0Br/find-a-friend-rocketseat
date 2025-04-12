import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindAllPetsService } from '@/services/pets/find-all-pets-service'

export function MakeFindAllPetsService() {
  const prismaPetRepository = new PrismaPetRepository()
  return new FindAllPetsService(prismaPetRepository)
}
