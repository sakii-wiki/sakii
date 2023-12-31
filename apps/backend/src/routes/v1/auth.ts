import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import { z } from "zod"
import { getAuth } from "firebase-admin/auth"
import { DefaultResponse, ErrorResponse } from "../../types/response"
import { prisma } from "../../utils/prisma"
import { sign } from "hono/jwt"
import { JWTPayload } from "../../types/jwt"
import { setCookie } from "hono/cookie"

const AuthRouter = new Hono()

AuthRouter.post("/", zValidator("json", z.object({ idToken: z.string() })), async (c) => {
  const body = await c.req.json()

  const auth = getAuth()
  const token = await auth.verifyIdToken(body.idToken)

  if (!token.email)
    return c.json(
      {
        error: false,
        message: "사용할 수 있는 이메일이 없습니다",
      } satisfies ErrorResponse,
      400,
    )

  const user = await prisma.user.upsert({
    where: { email: token.email },
    create: { email: token.email },
    update: {},
  })

  const jwt = await sign({ id: user.id } satisfies JWTPayload, process.env.JWT_SECRET)

  setCookie(c, "access_token", jwt, {
    ...(process.env.NODE_ENV !== "development" && {
      domain: "", // TODO: put here the backend's domain
      secure: true,
    }),
    httpOnly: true,
    sameSite: "None",
  })

  return c.json({ code: 201, data: "OK" } satisfies DefaultResponse, 201)
})

export default AuthRouter
