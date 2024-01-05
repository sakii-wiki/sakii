import { Hono } from "hono"
import { prisma } from "../../utils/prisma"

const DocumentsRouter = new Hono()

DocumentsRouter.get("/:name", async (c) => {
  return c.json(await prisma.document.findUnique({ where: { id: c.req.param("name") } }))
})

DocumentsRouter.post("/:name")

export default DocumentsRouter
