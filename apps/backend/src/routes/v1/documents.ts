import { Hono } from 'hono'

const router = new Hono()

router.get(':name')

router.post(':name')

export default router
