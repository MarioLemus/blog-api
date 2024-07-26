import { GenericObject } from "@interfaces/utils/GenericObject";

export interface RepoCreateOne {
    createOne(obj: GenericObject): Promise<GenericObject | Error>
}

export interface RepoDeleteOne {
    deleteOne(obj: GenericObject): Promise<void | Error>
}

export interface RepoFindOne {
    findOne(obj: GenericObject): Promise<GenericObject | Error | null>
}

export interface RepoUpdateOne {
    updateOne(oldObj: GenericObject, updatingObj: GenericObject): Promise<GenericObject | Error>
}

export interface RepoDeleteMany {
    deleteMany(id: string): Promise<void[] | Error>
}

export interface RepoFindAll {
    findAll(): Promise<GenericObject[] | void[] | Error>
}