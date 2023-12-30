import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { fetch } from 'undici'
import { z } from 'zod'
import { prisma } from '../../utils/prisma'

const AuthRouter = new Hono()
AuthRouter.post('/', zValidator('json', z.object({ code: z.string() })), async (c) => {
  // TODO: use google oauth

  return c.json({ fuck: 'You' })
})

export default AuthRouter
