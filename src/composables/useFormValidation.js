import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'
import { z } from 'zod'

// Common validation schemas
export const schemas = {
  email: z.string()
    .min(1, 'E-mail is verplicht')
    .email('Voer een geldig e-mailadres in'),

  password: z.string()
    .min(8, 'Wachtwoord moet minimaal 8 tekens bevatten')
    .regex(/[A-Z]/, 'Wachtwoord moet minimaal 1 hoofdletter bevatten')
    .regex(/[0-9]/, 'Wachtwoord moet minimaal 1 cijfer bevatten'),

  phone: z.string()
    .min(10, 'Telefoonnummer moet minimaal 10 cijfers bevatten')
    .regex(/^[0-9+\-\s()]+$/, 'Voer een geldig telefoonnummer in'),

  name: z.string()
    .min(2, 'Naam moet minimaal 2 tekens bevatten')
    .max(50, 'Naam mag maximaal 50 tekens bevatten'),

  postcode: z.string()
    .regex(/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/, 'Voer een geldige postcode in (bijv. 1234 AB)'),

  required: z.string().min(1, 'Dit veld is verplicht')
}

// Login form schema
export const loginSchema = z.object({
  email: schemas.email,
  password: z.string().min(1, 'Wachtwoord is verplicht')
})

// Registration form schema
export const registerSchema = z.object({
  firstName: schemas.name,
  lastName: schemas.name,
  email: schemas.email,
  password: schemas.password,
  confirmPassword: z.string().min(1, 'Bevestig je wachtwoord'),
  agreeTerms: z.boolean().refine(val => val === true, 'Je moet akkoord gaan met de voorwaarden')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Wachtwoorden komen niet overeen',
  path: ['confirmPassword']
})

// Contact form schema
export const contactSchema = z.object({
  name: schemas.name,
  email: schemas.email,
  phone: z.string().optional(),
  subject: z.string().min(1, 'Selecteer een onderwerp'),
  message: z.string().min(10, 'Bericht moet minimaal 10 tekens bevatten')
})

// Checkout form schema
export const checkoutSchema = z.object({
  firstName: schemas.name,
  lastName: schemas.name,
  email: schemas.email,
  phone: schemas.phone,
  seniorStreet: z.string().min(1, 'Straat is verplicht'),
  seniorPostcode: schemas.postcode,
  seniorCity: z.string().min(1, 'Plaats is verplicht'),
  agreeTerms: z.boolean().refine(val => val === true, 'Je moet akkoord gaan met de voorwaarden')
})

// Helper function to create a form with Zod schema
export function useValidatedForm(schema) {
  const typedSchema = toTypedSchema(schema)
  return useForm({
    validationSchema: typedSchema
  })
}

// Helper to create a validated field
export function useValidatedField(name, rules) {
  return useField(name, rules)
}

export { z, toTypedSchema, useForm, useField }
