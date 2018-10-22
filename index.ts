// Server Dependencies
require('dotenv').config({ path: `${__dirname}/../.env` })
import express from 'express'
import morgan from 'morgan'
import massive from 'massive'

// API Routes
import app_router from './routes'

// Environment Variables
const { NODE_ENV, PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASS } = process.env

// Express App
const app = express()
// Read JSON off of incoming requests
app.use(express.json())

// Log incoming requests with the morgan package
app.use(morgan('dev'))

// Routes
app.use('/api', app_router)

// Start the server
async function startServer() {
  try {
    const db_instance = await massive(
      {
        host: DB_HOST,
        database: DB_DATABASE,
        user: DB_USER,
        password: DB_PASS
      },
      { scripts: `${__dirname}/../db` }
    )

    app.set('db', db_instance)

    console.log(`Successfully connected to database ${DB_DATABASE}`)
    console.log(`Server running on NODE_ENV ${NODE_ENV}`)

    app.listen(PORT, () => console.log(`Sever listening on port ${PORT}!`))
  } catch (err) {
    console.error('startServer failed in index.ts:', err)
  }
}
startServer()
