import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindPetByIdService } from '@/services/pets/find-pet-by-id-service'

export function makeFindPetByIdService() {
  const prismaPetRepository = new PrismaPetRepository()
  return new FindPetByIdService(prismaPetRepository)
}
