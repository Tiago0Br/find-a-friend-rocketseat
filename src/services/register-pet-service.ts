import { PetRepository } from '@/repositories/pet-repository'

interface RegisterPetServiceRequest {
  data: {
    name: string
    about: string
    age: number
    size: string
    energy: string
    independence: string
    environment: string
  }
}

interface RegisterPetServiceResponse {
  id: string
}

export class RegisterPetService {
  constructor(private petRepository: PetRepository) {}
  async execute({
    data
  }: RegisterPetServiceRequest): Promise<RegisterPetServiceResponse> {
    const pet = await this.petRepository.create(data)

    return {
      id: pet.id
    }
  }
}
