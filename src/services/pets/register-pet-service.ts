import { PetRepository } from '@/repositories/pet-repository'
import { Prisma } from '@prisma/client'

interface RegisterPetServiceRequest {
  petData: Omit<Prisma.PetUncheckedCreateInput, 'organizationId'>
  organizationId: string
}

interface RegisterPetServiceResponse {
  id: string
}

export class RegisterPetService {
  constructor(private petRepository: PetRepository) {}
  async execute({
    petData,
    organizationId
  }: RegisterPetServiceRequest): Promise<RegisterPetServiceResponse> {
    const pet = await this.petRepository.create({
      ...petData,
      organizationId
    })

    return {
      id: pet.id
    }
  }
}
