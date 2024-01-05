import { Hono } from "hono"
import AuthRouter from "./auth"
import DocumentsRouter from "./documents"

const router = new Hono()

router.route("/auth", AuthRouter)
router.route("/docs", DocumentsRouter)

export default router
