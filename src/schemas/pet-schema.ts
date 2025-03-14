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
  age: z
    .number({
      required_error: 'Age is required',
      invalid_type_error: 'Age must be a number'
    })
    .positive('Age must be a positive number'),
  size: z.string({
    required_error: 'Size is required',
    invalid_type_error: 'Size must be a string'
  }),
  energy: z.string({
    required_error: 'Energy is required',
    invalid_type_error: 'Energy must be a string'
  }),
  independence: z.string({
    required_error: 'Independence is required',
    invalid_type_error: 'Independence must be a string'
  }),
  environment: z.string({
    required_error: 'Environment is required',
    invalid_type_error: 'Environment must be a string'
  })
})
