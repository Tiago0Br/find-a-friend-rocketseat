import { Prisma, Pet } from '@prisma/client'
import { PetRepository } from '../pet-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    return prisma.pet.create({ data })
  }
}
