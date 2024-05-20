const dotenv = require('dotenv')
const path = require('node:path')


function setCurrentEnvPath() {
    const environment = process.env.NODE_ENV || 'dev'
    const envPath = path.resolve(process.cwd(), 'env', `.env.${environment}`);
    dotenv.config({path: envPath})
}

module.exports = {setCurrentEnvPath}