module.exports = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {
        uri: process.env.DB_CONNECTION_URL
    },
    logger: {
        dev: process.env.LOGGER_OPTION
    }
}