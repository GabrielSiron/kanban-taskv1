import express from 'express'
import bodyParser from 'body-parser'
import { createEndpointsToTasks } from './endpoints/tasks'
import { createEndpointsToAutentication } from './endpoints/auth'
import { createEndpointsToCycles } from './endpoints/cycles'
import { initializeSessions, isAuthenticated, isPermittedChange } from './autentication'

export var sessions: Array<{ authenticationToken: string, userId: number }> = initializeSessions()

const port = process.env.PORT || "8080"

var cors = require('cors')

const api = express()

api.use(isAuthenticated)
api.use(isPermittedChange)
api.use(express.json())
api.use(bodyParser.urlencoded({extended: true}))     
api.use(cors())

createEndpointsToTasks(api, sessions)
createEndpointsToAutentication(api, sessions)
createEndpointsToCycles(api, sessions)

const server = api.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8081
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
