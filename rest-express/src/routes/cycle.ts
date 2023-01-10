import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

import { getIdOfUserSession } from '../autentication'

const prisma = new PrismaClient()

export function createRoutesToCycles(api: any, sessions: Array<any>) {
    api.get('/cycle', async (req: Request, res: Response) => {

        const userId = getUserId(req, sessions)
        await getCycles(res, userId)
    })

    api.post('/cycle', async (req: Request, res: Response) => {

        const userId = getUserId(req, sessions)
        await createCycle(req, res, userId)
        
    })

    api.put('/cycle/:id', async (req: Request, res: Response) => {
        
        await editCycle(req, res)
    })
    
    api.delete('/cycle/:id', async (req: Request, res: Response) => {
        
        const { id } = req.params
        await deleteCycle(res, Number(id))
    })
}

async function getCycles(res: Response, userId: number){
    
    const cycles = await prisma.cycle.findMany(
        {
            where: { userId: userId, }
        }
    )

    res.status(202).json(cycles)
}

async function createCycle(req: Request, res: Response, userId: number){
    const cycle = await prisma.cycle.create({
        data: {
            finalDate: req.body.finalDate,
            initialDate: req.body.initialate,
            duration: Number(req.body.duration),
            userId: userId
        }
    })

    res.status(202).json(cycle)
}

async function editCycle(req: Request, res: Response){
    
    const { id } = req.params
    
    const modifiedCycle = await prisma.cycle.update({
        where: {
            id: Number(id),
        },
        data: req.body
    })

    res.status(202).json(modifiedCycle)
}

async function deleteCycle(res: Response, id: number){

    await prisma.cycle.delete({
        where: {
            id: id
        }
    }).then(() => {
        
        res.status(202).json({message: "deleted!"})
    }).catch(err => {

        res.status(402).json(err)
    })
}

function getUserId(req: Request, sessions: Array<any>){
    const token = req.headers['authorization'] || ''
    const userId = getIdOfUserSession(token, sessions)
    return userId
}