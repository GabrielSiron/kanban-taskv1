import { Request, Response } from 'express'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

export function createRoutesToAutentication(api: any, sessions: Array<any>) {
    api.post('/signup', async (req: Request, res: Response) => {
      const user = await getUser(req)
        
        if(!user){
          await createUser(req, res)
        }
        else {
          res.status(401).json({message: "Usuario existe"}); 
        }
    })
    
    api.post('/login', async (req: Request, res: Response) => {
      const user = await getUser(req)
    
      if(user){
        const password = req.body.password
        await initializeSession(res, user, password, sessions)
    
      } else {
        res.json({message: "Senha ou email incorretos"})
      }
      
    })

    api.post('/logout', async (req: Request, res: Response) => {

        sessions = sessions.filter(data => { return data.authenticationToken != req.body.autenticationToken })
        res.json({message: "Usuário deslogado"})
    })
    
}

async function generateToken(length: number) {
  
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result  
}

async function getUser(req: Request){
  const user = await prisma.user.findFirst(
    {
      where: {
        email: req.body.email,
      }
    }
  )

  return user
}

async function createUser(req: Request, res: Response){
  
  const password = req.body.password
  const saltRounds = 10
  
  bcrypt.hash(password, saltRounds,  async (err: any, encryptedPassword: string) => {
    if(err) {
      throw new Error("Internal Server Error")
    }
    
    prisma.user.create({
      data: {
          email: req.body.email,
          password: encryptedPassword,
          name: req.body.name
      }

    }).then((user) => {
    
      res.status(200).json({message: 'User created!', user: user})
    }).catch(err => {
    
      res.status(401).json(err);
    })
  })
}

async function initializeSession(res: Response, user: User, password: string, sessions: Array<any>){
  
  bcrypt.compare(password, user.password, async (err: any, result: boolean) => {
    if (err){
      throw new Error("Internal Server Error");
    }
    
    if(result){
      var sessionsWithoutActualUser = sessions.filter(data => { return data.userId == user.id })

      if(sessionsWithoutActualUser.length == 0){
        const token = await generateToken(10)
        
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
  })
}