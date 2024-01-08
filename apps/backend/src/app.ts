import "dotenv/config"
import { serve } from "@hono/node-server"
import { Hono } from "hono"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string
      NODE_ENV: "development" | "production"
    }
  }
}

// TODO: add validation of envs

import { showRoutes } from "hono/dev"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"

import v1 from "./routes/v1"

const app = new Hono()
const port = Number(process.env.PORT ?? 3001)

app.use("*", logger())
app.use("*", secureHeaders({ xXssProtection: "1" }))

app.get("/", (c) =>
  c.json({
    data: "Running...",
  }),
)

app.route("/v1", v1)

console.log(`Server is running on port ${port}`)

showRoutes(app)

serve({
  fetch: app.fetch,
  port,
})
