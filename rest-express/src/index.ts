import express from 'express'
import bodyParser from 'body-parser'
import { createRoutesToTasks } from './routes/task'
import { createRoutesToAutentication } from './routes/auth'
import { createRoutesToCycles } from './routes/cycle'
import { initializeSessions, isAuthenticated, isPermittedChange } from './autentication'
import { createRoutesToDay } from './routes/day'

export var sessions: Array<{ authenticationToken: string, userId: number }> = initializeSessions()

const port = process.env.PORT || "8080"

var cors = require('cors')

const api = express()

api.use(isAuthenticated)
api.use(isPermittedChange)
api.use(express.json())
api.use(bodyParser.urlencoded({extended: true}))     
api.use(cors())

createRoutesToTasks(api, sessions)
createRoutesToAutentication(api, sessions)
createRoutesToCycles(api, sessions)
createRoutesToDay(api, sessions)

const server = api.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8081
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
