import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

import { isAuthenticated, getIdOfUserSession } from '../autentication'

const prisma = new PrismaClient()

export function createEndpointsToCycles(app: any, sessions: Array<any>) {
    app.get('/cycles', async (req: Request, res: Response) => {

        var returnedCycles: Array<any> = []

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
            
            cycles.forEach(async (cycle) => {
                const tasks = await getTasks(cycle.id)
                const completedTasks = await countCompletedTasks(tasks);
                console.log(completedTasks);
                
                returnedCycles.push({...cycle, completedTasks: completedTasks})
            })

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

async function getTasks(cycleId: number){
    
    var tasks: Array<any> = []

    const days = await prisma.day.findMany({
        where: {
            cycleId: cycleId
        },
        include: {
            task: true,
        }
    })

    days.forEach(day => {
        tasks.push(day.task)
    });

    return tasks
}

async function countCompletedTasks(tasks: Array<any>){

    const completedTasks = tasks.filter(async (task) => { 
        const status = await task.status
        return status == 'to do'
    })

    return completedTasks.length
}