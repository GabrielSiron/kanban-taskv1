import { Request, Response } from "express"
import { sessions } from '../index'
import { PrismaClient } from '@prisma/client' 
import { Cycle, Task, Day } from '@prisma/client'

export async function isPermittedChange(req: Request, res: Response, next: any){
  
    if(req.method == 'PUT'){
      const prisma = new PrismaClient()
  
      const entityOfRequest = getEntityInRequest(req)
      const token = req.headers['authorization'] || ''
      const userId = getIdOfUserSession(token, sessions)
  
      var result: Array<any> = []
  
      const id = getIdInRequest(req)
      
      if(entityOfRequest == "cycle"){
        result = await prisma.$queryRaw<Cycle[]>`SELECT * FROM Cycle WHERE id = ${Number(id)}`
      } 
  
      else if(entityOfRequest == "task"){
        result = await prisma.$queryRaw<Task[]>`SELECT * FROM Task WHERE id = ${Number(id)}`
      }
  
      else if(entityOfRequest == "day"){
        result = await prisma.$queryRaw<Day[]>`SELECT * FROM day WHERE id = ${Number(id)}`
      }
      
      const uniqueResult = result[0]
  
      if(uniqueResult.userId == userId) next()
      else res.status(401).json({message: "Not Authorized"})
      
  
    } else next()
}
  
  export async function isAuthenticated(req: Request, res: Response, next: any) {
    
    if(req.path != '/login' && req.path != '/signup' && req.path != '/logout'){
      const token = req.headers['authorization'] || ''
      
      const userSession = sessions.filter(session => { return session.authenticationToken == token })
      
      if(userSession.length == 1) next()
      else res.status(401).json({"message": "Not Authorized"})
    } else {
      next()
    }
    
  }
  
export function userIsAuthenticated(token: string, sessions: Array<any>){
    const userSession = sessions.filter(session => { return session.authenticationToken == token })
    
    if(userSession.length == 1)
        return Promise.resolve()
    else 
        return Promise.reject()
    
    
}

export function getIdOfUserSession( token: string, sessions: Array<any>){
    return sessions.filter(session => { return session.authenticationToken == token })[0].userId
}

export function getEntityInRequest(req: Request){
    const itemsInRoute = req.path.split("/").filter((data) => { return data != ""})
    return itemsInRoute[0]
}

export function getIdInRequest(req: Request){
    const itemsInRoute = req.path.split("/").filter((data) => { return data != ""})
    return itemsInRoute[1]
}

export function initializeSessions(){
    if(process.env.IS_TEST == 'true'){
        return [{authenticationToken: 'token', userId: 1}]
    } else {
        return []
    }
}

export function getUserId(req: Request, sessions: Array<any>){
  const token = req.headers['authorization'] || ''
  const userId = getIdOfUserSession(token, sessions)
  return userId
}