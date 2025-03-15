import { z } from 'zod'

export const registerOrgSchema = z.object({
  responsibleName: z
    .string({
      required_error: 'Responsible name is required',
      invalid_type_error: 'Responsible name must be a string'
    })
    .min(3, 'Responsible name must be at least 3 characters'),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email('Email must be a valid email'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string'
    })
    .min(6, 'Password must be at least 6 characters'),
  zipcode: z.string({
    required_error: 'Zipcode is required',
    invalid_type_error: 'Zipcode must be a string'
  }),
  address: z.string({
    required_error: 'Address is required',
    invalid_type_error: 'Address must be a string'
  }),
  number: z.coerce.number({
    required_error: 'Number is required',
    invalid_type_error: 'Number must be a number'
  }),
  district: z.string({
    required_error: 'District is required',
    invalid_type_error: 'District must be a string'
  }),
  complement: z
    .string({
      invalid_type_error: 'Complement must be a string'
    })
    .optional(),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string'
  }),
  state: z.string({
    required_error: 'State is required',
    invalid_type_error: 'State must be a string'
  }),
  whatsapp: z.string({
    required_error: 'Whatsapp is required',
    invalid_type_error: 'Whatsapp must be a string'
  })
})
