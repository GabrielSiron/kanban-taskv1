import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

import { isAuthenticated, getIdOfUserSession } from '../autentication'

const prisma = new PrismaClient()

export function createEndpointsToCycles(app: any, sessions: Array<any>) {
    app.get('/cycles', async (req: Request, res: Response) => {

        const token = req.headers['authorization'] || ''

        if(isAuthenticated(token, sessions)){
            const userId = getIdOfUserSession(token, sessions)
            const cycles = await prisma.cycle.findMany(
                {
                  where: {
                    userId: userId,
                  }
                }
              )
            
              res.json(cycles)
        } else {
            res.status(401).json({message: "Not Authorized"})
        }
        
    })

    app.post('/cycles', async (req: Request, res: Response) => {
        const cycle = await prisma.cycle.create({
            data: {
                finalDate: req.body.finalDate,
                initialDate: req.body.initialate,
                duration: Number(req.body.duration)
            }
        })
        .then((cycle) => res.status(200).json(cycle))
        .catch((err) => res.status(500).json(err))

        
    })

    
}