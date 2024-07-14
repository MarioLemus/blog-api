import mongoose from 'mongoose'

enum ValidDB {
    mongo = 'mongo',
}

type DbManager = `${ValidDB}`

export function connectDB(dbManager:DbManager, URI?:string) {
    switch(dbManager) {
        case ValidDB.mongo:
            if (!URI) throw new Error('An URI string must be provided for mongo databases')
            async function setConnection(URI:string): Promise<void> {
                await mongoose.connect(URI)
                .catch(_ => console.log("DB failed to connect"))
            }
            setConnection(URI)
            return 
        default:
            throw new Error('Invalid database')
    }

}