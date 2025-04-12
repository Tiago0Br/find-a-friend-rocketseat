import { PetNotFound } from '@/http/errors'
import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface FindPetByIdServiceRequest {
  id: string
}

interface FindPetByIdServiceResponse {
  pet: Pet
}

export class FindPetByIdService {
  constructor(private petRepository: PetRepository) {}

  async execute({ id }: FindPetByIdServiceRequest): Promise<FindPetByIdServiceResponse> {
    const pet = await this.petRepository.findById(id)

    if (!pet) {
      throw PetNotFound.byId(id)
    }

    return { pet }
  }
}
