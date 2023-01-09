import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { createEndpointsToTasks } from './endpoints/tasks'
import { createEndpointsToAutentication } from './endpoints/auth'
import { createEndpointsToCycles } from './endpoints/cycles'
import { initializeSessions, isAuthenticated, isPermittedChange } from './autentication'

export var sessions: Array<{ authenticationToken: string, userId: number }> = initializeSessions()

const port = process.env.PORT || "8080"

var cors = require('cors')

const app = express()

app.use(isAuthenticated)
app.use(isPermittedChange)
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))     
app.use(cors())

createEndpointsToTasks(app, sessions)
createEndpointsToAutentication(app, sessions)
createEndpointsToCycles(app, sessions)

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8081
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
