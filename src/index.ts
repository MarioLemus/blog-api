import 'module-alias/register'
import userRoutes from '@routes/v1/userRoutes'
import authRoutes from '@routes/v1/authRoutes'
import {connectDB} from '@utils/connectDB'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from 'config'
import {AddressInfo} from 'net'
import {config as envConfig} from 'dotenv'

envConfig()

const PORT = config.get('server.port') as number
const DB_URI = config.get('db.uri') as string
const LOGGER_OPT = config.get('logger.dev') as string
const ERROR_PORT_TAKEN = 'EADDRINUSE'

const server = express()
const allowedOrigins = ['http://localhost:5173']

connectDB('mongo', DB_URI)

server.use(cors({origin: allowedOrigins}))
server.use(morgan(LOGGER_OPT))
server.use(express.json())
server.use('/api/v1', userRoutes)
server.use('/api/v1', authRoutes)

function startServer(port: number) {
    const currServer = server.listen(port, () => {        
        const serverInfo = currServer.address() as AddressInfo
        console.log(
            serverInfo.address === '::'
            ? `Server running on http://localhost:${port}` 
            : `Server running on ${serverInfo.address}`
        )
    })
    
    currServer.on('error', (err: NodeJS.ErrnoException) => {
        if (err.code === ERROR_PORT_TAKEN && process.env.NODE_ENV === 'development') {
            console.log(`Port ${port} is already in use. Trying port ${port + 1}`)
            startServer(port + 1)
            return
        }
        console.log('Error starting server')
    })
}

startServer(PORT)