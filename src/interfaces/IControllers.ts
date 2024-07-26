import {Request, Response} from 'express'

export interface ControllerCreateOne {
    createOne(req?:Request, res?:Response): Promise<void>;
}

export interface ControllerDeleteOne {
    deleteOne(req?:Request, res?:Response): Promise<void>;
}


export interface ControllerGetOne {
    getOne(req?:Request, res?:Response): Promise<void>;
}

export interface ControllerUpdateOne {
    updateOne(req?:Request, res?:Response): Promise<void>;
}

export interface ControllerDeleteMany {
    deleteMany(req?:Request, res?:Response): Promise<void>;
}

export interface ControllerGetAll {
    getAll(req?:Request, res?:Response): Promise<void>;
}