import { UserRepo } from '@repositories/UserRepo'
import { generateHash } from '@utils/generateHash'
import { 
    RepoCreateOne, 
    RepoDeleteOne,
    RepoUpdateOne,
    RepoFindOne,
    RepoFindAll
} from '@interfaces/IRepo' 

export class UserServices implements RepoCreateOne, RepoUpdateOne, RepoDeleteOne, RepoFindOne, RepoFindAll {
   private userRepo: UserRepo
    constructor() {
        this.userRepo = new UserRepo()
   }

    async createOne(obj: any) {
        if (Object.keys(obj).length === 0) {
            throw new Error('Empty object arg not allowed when creating user')
        }

        const validData = {
            email: obj.email,
            nickname: obj.nickname,
            profilePic: obj.profilePic ?? null,
            password: generateHash(obj.password)
        }
        const data = await this.userRepo.createOne(validData)
        .catch(err => { throw new Error(err.message) })

        if (!data) {
            throw new Error('Error when creating user, no data returned')
        }

      return data
   }

   async deleteOne(obj: any) {
        if (Object.keys(obj).length === 0) {
            throw new Error('Empty object arg not allowed when deleting user')
        }
        if (Object.keys(obj).length > 1) {
            throw new Error('More than one key in object arg not allowed when deleting user')
        }

        await this.userRepo.deleteOne(obj)
        .catch(err => { throw new Error(err.message) })
   }

   async findOne(obj: any) {
        if (Object.keys(obj).length === 0) {
            throw new Error('Empty object arg not allowed when finding user')
        }

        const data = await this.userRepo.findOne(obj)
        .catch(err => { throw new Error(err.message) })

        if (!data) {
            throw new Error('Error when finding user, no data returned')
        }

        return data
   }

   async updateOne(oldObj: any, updatingObj: any) {
        if (
            Object.keys(oldObj).length === 0 || 
            Object.keys(updatingObj).length === 0
        ) {
            throw new Error('Empty object arg not allowed when updating user')
        }

        const data = await this.userRepo.updateOne(oldObj, updatingObj)
        .catch(err => { throw new Error(err.message) })

        if (!data) {
            throw new Error('Error when updating user, no data returned')
        }

        return data
   }

   async findAll() {
        return await this.userRepo.findAll()
        .catch(err => { throw new Error(err.message) })
   }
}
