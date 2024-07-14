module.exports = {
    server: {
        port: 4000
    },
    db: {
        uri: process.env.DB_CONNECTION_URL
    },
    logger: {
        dev: 'dev'
    }
}