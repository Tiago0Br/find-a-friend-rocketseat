import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface FindAllPetsServiceRequest {
  city: string
}

interface FindAllPetsServiceResponse {
  pets: Pet[]
}

export class FindAllPetsService {
  constructor(private petRepository: PetRepository) {}

  async execute({ city }: FindAllPetsServiceRequest): Promise<FindAllPetsServiceResponse> {
    const pets = await this.petRepository.findAllByCity(city)

    return { pets }
  }
}
