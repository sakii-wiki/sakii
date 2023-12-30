import { Hono } from 'hono'
import AuthRouter from './auth'

const router = new Hono()

router.route('/auth', AuthRouter)

export default router
