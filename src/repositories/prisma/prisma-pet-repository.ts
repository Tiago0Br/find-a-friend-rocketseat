import { Prisma, Pet } from '@prisma/client'
import { PetRepository } from '../pet-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    return prisma.pet.create({
      data: {
        name: data.name,
        about: data.about,
        ageInMonths: data.ageInMonths,
        size: data.size,
        energy: data.energy,
        independence: data.independence,
        environment: data.environment,
        organizationId: data.organizationId
      }
    })
  }

  findAllByCity(city: string): Promise<Pet[]> {
    return prisma.pet.findMany({
      where: {
        organization: {
          city: {
            mode: 'insensitive',
            equals: city
          }
        }
      }
    })
  }

  findById(id: string): Promise<Pet | null> {
    return prisma.pet.findUnique({
      where: {
        id
      }
    })
  }

  findByFilter(filters: Partial<Pet>): Promise<Pet[]> {
    return prisma.pet.findMany({
      where: {
        ...filters,
        name: {
          mode: 'insensitive',
          contains: filters.name
        }
      }
    })
  }
}
