import { z } from 'zod'

export const JWTPayload = z.object({
  id: z.string(),
})

export type JWTPayload = z.infer<typeof JWTPayload>
