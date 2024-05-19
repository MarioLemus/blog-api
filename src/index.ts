import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const server = express()
const PORT = 4000
const LOGGER_OPT = 'dev'

server.use(cors())
server.use(morgan(LOGGER_OPT))
server.use(express.json())

server.get('/', (req, res) => {
    res.send('prueba')
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})