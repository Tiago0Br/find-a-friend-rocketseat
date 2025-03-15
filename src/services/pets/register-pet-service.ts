import { PetRepository } from '@/repositories/pet-repository'
import { Pet, Prisma } from '@prisma/client'

interface RegisterPetServiceRequest {
  petData: Prisma.PetUncheckedCreateInput
}

interface RegisterPetServiceResponse {
  id: string
}

export class RegisterPetService {
  constructor(private petRepository: PetRepository) {}
  async execute({ petData }: RegisterPetServiceRequest): Promise<RegisterPetServiceResponse> {
    const pet = await this.petRepository.create(petData)

    return {
      id: pet.id
    }
  }
}
