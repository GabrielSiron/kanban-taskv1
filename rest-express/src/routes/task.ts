import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { getUserId } from '../autentication'

const prisma = new PrismaClient()

export function createRoutesToTasks(api: any, sessions: Array<any>) {
    api.get('/task', async (req: Request, res: Response) => {

        const userId = getUserId(req, sessions)
        await getTasks(res, userId)
    })

    api.post('/task', async (req: Request, res: Response) => {

        const userId = getUserId(req, sessions)
        await createTask(req, res, userId)
    })

    api.put('/task/:id', async (req: Request, res: Response) => {
        await editTask(req, res)
    })
}

async function getTasks(res: Response, userId: number){
    const tasks = await prisma.task.findMany(
        {
            where: { userId: userId, }
        }
    )

    res.status(202).json(tasks)
}

async function createTask(req: Request, res: Response, userId: number){
    const task = await prisma.task.create({
        data: {...req.body, userId: userId}
    })

    res.status(202).json(task)
}

async function editTask(req: Request, res: Response){

    const { id } = req.params
    
    const modifiedTask = await prisma.task.update({
        where: {
            id: Number(id),
        },
        data: req.body
    })

    res.status(202).json(modifiedTask)
}