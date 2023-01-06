import { PrismaClient } from '@prisma/client'
import express from 'express'
import bodyParser from 'body-parser'
import { createEndpointsToTasks } from './endpoints/tasks'
import { createEndpointsToAutentication } from './endpoints/auth'

const port = 8081

var cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))     
app.use(cors())

createEndpointsToTasks(app)

createEndpointsToAutentication(app)

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

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
