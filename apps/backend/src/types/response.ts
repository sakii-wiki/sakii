import { z } from "zod"

export const ErrorResponse = z.object({
  error: z.literal(false),
  message: z.string(),
})
export type ErrorResponse = z.infer<typeof ErrorResponse>

export const DefaultResponse = z.object({
  code: z.number(),
  data: z.any(),
})
export type DefaultResponse = z.infer<typeof DefaultResponse>

export const ResponseType = z.union([ErrorResponse, DefaultResponse, z.any()])

export type ResponseType = z.infer<typeof ResponseType>
