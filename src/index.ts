import 'module-alias/register'
import userRoutes from '@routes/v1/userRoute'
import {connectDB} from '@utils/connectDB'
//import {} from '@utils/se'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from 'config'
import path from 'node:path'
import dotenv from 'dotenv'

const environment = process.env.NODE_ENV || 'dev'
const envPath = path.resolve(process.cwd(), 'env', `.env.${environment}`);
// load env folder path
dotenv.config({ path: envPath });

const server = express()
const PORT = config.get('server.port') as number
const LOGGER_OPT = config.get('logger.dev') as string

//connectDB('mongo')

server.use(cors())
server.use(morgan(LOGGER_OPT))
server.use(express.json())
server.use('/api/v1', userRoutes)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})