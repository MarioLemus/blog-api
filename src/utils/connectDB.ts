import mongoose from 'mongoose'

enum ValidDBs {
    mongo = 'mongo'
}

export function connectDB(dbManager:string, URI?:string) {
    switch(dbManager) {
        case ValidDBs.mongo:
            if (!URI) throw new Error('An URI string must be provided for mongo databases')
            async function setConnection(URI:string): Promise<void | Error> {
                await mongoose.connect(URI)
            }
            setConnection(URI).catch(_ => console.log("DB failed to connect"))
            break
        default:
            throw new Error('Invalid database')
    }

}