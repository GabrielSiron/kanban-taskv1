import express from 'express'
import bodyParser from 'body-parser'
import { createEndpointsToTasks } from './endpoints/tasks'
import { createEndpointsToAutentication } from './endpoints/auth'
import { createEndpointsToCycles } from './endpoints/cycles'

const port = process.env.PORT || "8080"

var cors = require('cors')

var sessions: Array<{ authenticationToken: string, userId: number }> = []

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))     
app.use(cors())

createEndpointsToTasks(app, sessions)

createEndpointsToAutentication(app, sessions)

createEndpointsToCycles(app, sessions)

app.get('/', (req, res) => {
  res.json({message: "Faça login"})
})

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:8081
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
