import { z } from 'zod'

export const ErrorResponse = z.object({
  error: z.literal(false),
  message: z.string(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

export const ResponseType = z.union([ErrorResponse, z.any()])

export type ResponseType = z.infer<typeof ResponseType>
