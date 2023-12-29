import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { showRoutes } from 'hono/dev'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'

import v1 from './routes/v1'

const app = new Hono()
const port = Number(process.env.PORT ?? 3001)

app.use('*', logger())
app.use('*', secureHeaders({ xXssProtection: '1' }))

app.get('/', (c) =>
  c.json({
    data: 'Running...',
  }),
)

app.route('/v1', v1)

console.log(`Server is running on port ${port}`)

showRoutes(app)

serve({
  fetch: app.fetch,
  port,
})
