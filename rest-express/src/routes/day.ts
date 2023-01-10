import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

import { getIdOfUserSession, getUserId } from '../autentication'

const prisma = new PrismaClient()

export function createRoutesToDay(api: any, sessions: Array<any>){

    api.get('/day', async (req: Request, res: Response) => {
        
        const userId = getUserId(req, sessions)
        await getDays(res, userId)
    })

    api.post("/day", async (req: Request, res: Response) => {
        
        const userId = getUserId(req, sessions)
        await createDay(req, res, userId)
    })

    api.put("/day/:id", async (req: Request, res: Response) => {

        const { id } = req.params
        await editDay(req, res, Number(id))
    })
}

async function getDays(res: Response, userId: number){
    const days = await prisma.day.findMany(
        {
            where: { userId: userId, },
            include: {
                task: true
            }
            
        }
    )

    res.status(202).json(days)
}

async function createDay(req: Request, res: Response, userId: number){
    const day = await prisma.day.create({
        data: {...req.body, userId: userId}
    })

    res.status(202).json(day)
}

async function editDay(req: Request, res: Response, id: number){

    const modifiedDay = await prisma.day.update({
        where: {
            id: Number(id),
        },
        data: req.body
    })

    res.status(202).json(modifiedDay)

}