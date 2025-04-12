import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface FindPetsByFiltersServiceRequest {
  filters: Partial<Pet>
}

interface FindPetsByFiltersServiceResponse {
  pets: Pet[]
}

export class FindPetsByFiltersService {
  constructor(private prismaPetRepository: PetRepository) {}

  async execute({
    filters
  }: FindPetsByFiltersServiceRequest): Promise<FindPetsByFiltersServiceResponse> {
    const pets = await this.prismaPetRepository.findByFilter(filters)

    return { pets }
  }
}
