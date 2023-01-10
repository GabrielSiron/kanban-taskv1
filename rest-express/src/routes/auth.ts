import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function createRoutesToAutentication(api: any, sessions: Array<any>) {
    api.post('/signup', async (req: Request, res: Response) => {
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
        
            res.status(200).json({message: 'User created!'})
        }
    
        res.status(401).json({message: 'User already exists'});
    })
    
    api.post('/login', async (req: Request, res: Response) => {
      const user = await prisma.user.findFirst(
        {
          where: {
            email: req.body.email,
          }
        }
      )
    
      if(user){
        if(user?.password == req.body.password) {
          console.log(sessions);
          
          var sessionsWithoutActualUser = sessions.filter(data => { return data.userId == user.id })

          if(sessionsWithoutActualUser.length == 0){
            const token = generateToken(10)
            sessions.push({
                authenticationToken: token,
                userId: user.id
            })

            res.status(200).json({...user, autenticationToken: token})

          } else {
            res.status(401).json({message: "Usuário já logado"})
          }
          
        } else 
          res.json({message: "Senha ou email incorretos"})
    
      } else {
        res.json({message: "Senha ou email incorretos"})
      }
      
    })

    api.post('/logout', async (req: Request, res: Response) => {
        sessions = sessions.filter(data => { return data.authenticationToken != req.body.autenticationToken })

        res.json({message: "Usuário deslogado"})
    })
    
}

function generateToken(length: number) {
  
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }