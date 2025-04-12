import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindPetsByFiltersService } from '@/services/pets/find-pets-by-filters-service'

export function makeFindPetsByFiltersService() {
  const prismaPetRepository = new PrismaPetRepository()
  return new FindPetsByFiltersService(prismaPetRepository)
}
