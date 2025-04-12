import { z } from 'zod'

export const registerPetSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string'
    })
    .max(50, 'Name must be less than 50 characters'),
  about: z.string({
    required_error: 'About is required',
    invalid_type_error: 'About must be a string'
  }),
  ageInMonths: z
    .number({
      required_error: 'Age is required',
      invalid_type_error: 'Age must be a number'
    })
    .positive('Age must be a positive number'),
  size: z.enum(['VERY_SHORT', 'SHORT', 'MEDIUM', 'LARGE'], {
    required_error: 'Size is required',
    invalid_type_error: 'Size must be a string'
  }),
  energy: z.enum(['LOW', 'MEDIUM', 'HIGH'], {
    required_error: 'Energy is required',
    invalid_type_error: 'Energy must be a string'
  }),
  independence: z.enum(['LOW', 'MEDIUM', 'HIGH'], {
    required_error: 'Independence is required',
    invalid_type_error: 'Independence must be a string'
  }),
  environment: z.enum(['SMALL', 'MEDIUM', 'LARGE'], {
    required_error: 'Environment is required',
    invalid_type_error: 'Environment must be a string'
  })
})

export const findAllPetsSchema = z.object({
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string'
  })
})

export const findPetByIdSchema = z.object({
  id: z
    .string({
      required_error: 'City is required'
    })
    .uuid({ message: 'Id must be a valid uuid' })
})

export const findPetsByFiltersSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string'
    })
    .optional(),
  ageInMonths: z
    .number({
      required_error: 'Age is required',
      invalid_type_error: 'Age must be a number'
    })
    .positive('Age must be a positive number')
    .optional(),
  size: z
    .enum(['VERY_SHORT', 'SHORT', 'MEDIUM', 'LARGE'], {
      required_error: 'Size is required',
      invalid_type_error: 'Size must be a string'
    })
    .optional(),
  energy: z
    .enum(['LOW', 'MEDIUM', 'HIGH'], {
      required_error: 'Energy is required',
      invalid_type_error: 'Energy must be a string'
    })
    .optional(),
  independence: z
    .enum(['LOW', 'MEDIUM', 'HIGH'], {
      required_error: 'Independence is required',
      invalid_type_error: 'Independence must be a string'
    })
    .optional(),
  environment: z
    .enum(['SMALL', 'MEDIUM', 'LARGE'], {
      required_error: 'Environment is required',
      invalid_type_error: 'Environment must be a string'
    })
    .optional()
})
