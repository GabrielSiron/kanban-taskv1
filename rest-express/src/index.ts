import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import bodyParser from 'body-parser'
import { signup } from './autentication'

import { cyclesWithCountDays } from './interfaces/cycles'

const port = 8080

var cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))     
app.use(cors())


app.post('/signup', async (req, res) => {
    signup(req, res)
})

app.post('/login', async (req, res) => {
  const user = await prisma.user.findFirst(
    {
      where: {
        email: req.body.email,
      }
    }
  )

  if(user){
    if(user?.password == req.body.password) {
      res.json({message: "Senha correta"})
    }
    else res.json({message: "Senha incorreta"})
  } else {
    res.json({message: "Não encontramos o user"})
  }
  
})

app.get('/', (req, res) => {
  res.json({message: "Faça login"})
})

app.get('/cycles', async (req, res) => {
  
  const cycles = await prisma.cycle.findMany(
    {
      where: {
        userId: 1,
      }
    }
  )

  res.json(cycles)  
})

app.post('/project', async (req, res) => {
  ;
  // const { name, description, inspiration, objective, nameOfCreator, email } = req.body
  // const result = await prisma.tag.create(
  //   {
  //     data: {
        
  //     }
  //   }
  // )

  // console.log(result);
  
  // res.json(result)
})

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
