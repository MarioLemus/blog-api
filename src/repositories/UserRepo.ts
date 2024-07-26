import { UserModel } from '@models/UserModel';
import { 
    RepoCreateOne, 
    RepoDeleteOne, 
    RepoFindOne, 
    RepoUpdateOne,
    RepoFindAll 
} from '@interfaces/IRepo';
import { GenericObject } from '@interfaces/utils/GenericObject';

export class UserRepo implements RepoCreateOne, RepoDeleteOne, RepoFindOne, RepoUpdateOne, RepoFindAll {
    async createOne(obj: GenericObject): Promise<any> {
        return await new UserModel(obj)
            .save()
            .catch(err => { throw new Error(err); });
    }
    
    async deleteOne(obj: GenericObject): Promise<any> {
        return await UserModel.deleteOne(obj)
            .catch(err => { throw new Error(err); });
    }

    async findOne(obj: GenericObject): Promise<GenericObject | Error | null> {
        const data = await UserModel.where(obj)
        .findOne()
        .catch(err => { throw new Error(err); });
        return !data ? null : data;
    }

    async updateOne(oldObj: GenericObject, updatingObj: GenericObject): Promise<any> {
        return await UserModel.updateOne(oldObj, updatingObj)
            .catch(err => { throw new Error(err); });
    }

    async findAll(): Promise<GenericObject[] | void[] | Error> {
        return await UserModel.find({})
            .catch(err => { throw new Error(err); });
    }
}
