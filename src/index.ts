import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoutes from '@routes/v1/usersRoutes'

const server = express()
const PORT = 4000
const LOGGER_OPT = 'dev'

server.use(cors())
server.use(morgan(LOGGER_OPT))
server.use(express.json())
server.use('/api/v1', userRoutes)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})