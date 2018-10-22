// Server Dependencies
import express from 'express'
import morgan from 'morgan'

// API Routes
import app_router from './routes'

// Express App
const app = express()
// Read JSON off of incoming requests
app.use(express.json())

// Log incoming requests with the morgan package
app.use(morgan('dev'))

// Routes
app.use('/api', app_router)

// Start the server
const PORT: number = 4020
app.listen(PORT, () => console.log(`Sever listening on port ${PORT}!`))
