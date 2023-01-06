import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function createEndpointsToTasks(app: any, sessions: Array<any>) {
    app.post('/task', async (req: Request, res: Response) => {
        const task = await prisma.task.create({
            data: req.body
        })

        res.json(task)
    })

    app.put('/task/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const task = await prisma.task.update({
            where: { id: Number(id) },
            data: req.body
        })

        res.json(task)
    })
}