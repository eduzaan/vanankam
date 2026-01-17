import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5, 'Message is too short'),
})

export type ContactForm = z.infer<typeof contactSchema>

export const franchiseSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  city: z.string().min(2),
  state: z.string().optional(),
  investment: z.string().min(1),
  franchiseModel: z.string().optional(),
  experience: z.string().optional(),
  message: z.string().optional(),
})

export type FranchiseForm = z.infer<typeof franchiseSchema>

export const careersSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  resume: z.string().optional(),
})

export type CareersForm = z.infer<typeof careersSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export type NewsletterForm = z.infer<typeof newsletterSchema>
