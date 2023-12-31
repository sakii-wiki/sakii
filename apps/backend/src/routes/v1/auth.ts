import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'
import { getAuth } from 'firebase-admin/auth'
import { ErrorResponse } from '../../types/response'
import { prisma } from '../../utils/prisma'
import { sign } from 'hono/jwt'
import { JWTPayload } from '../../types/jwt'

const AuthRouter = new Hono()
AuthRouter.post('/', zValidator('json', z.object({ idToken: z.string() })), async (c) => {
  const body = await c.req.json()

  const auth = getAuth()
  const token = await auth.verifyIdToken(body.idToken)

  if (!token.email)
    return c.json({
      error: false,
      message: '사용할 수 있는 이메일이 없습니다',
    } satisfies ErrorResponse)

  const user = await prisma.user.upsert({
    where: { email: token.email },
    create: { email: token.email },
    update: {},
  })

  const jwt = await sign({ id: user.id } satisfies JWTPayload, process.env.JWT_SECRET)

  setCookie // TODO

  return c.json({ fuck: 'You' })
})

export default AuthRouter
