import { Hono } from 'hono'

const router = new Hono()

router.post('/auth')

export default router
