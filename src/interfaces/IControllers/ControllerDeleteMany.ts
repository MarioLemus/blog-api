import {Request, Response} from 'express'

export interface ControllerDeleteMany {
    deleteMany(req?:Request, res?:Response): void;
}
