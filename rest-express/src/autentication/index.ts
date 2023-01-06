import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

const prisma = new PrismaClient()

export async function signup (req: Request, res: Response){
    const user = await prisma.user.findFirst(
        {
          where: {
            email: req.body.email,
          }
        }
      )
    
    if(!user){
        const createdUser = await prisma.user.create({
            data: {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            }
        })
    
        res.json({code: 202, message: 'User created!'})
    }

    res.json({code: 404, message: 'User already exists'});
}
    