import { Pet, Prisma } from '@prisma/client'

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findAllByCity(city: string): Promise<Pet[]>
  findById(id: string): Promise<Pet | null>
  findByFilter(filters: Partial<Pet>): Promise<Pet[]>
}
