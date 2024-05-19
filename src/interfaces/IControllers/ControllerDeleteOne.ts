import {Request, Response} from 'express'

export interface ControllerDeleteOne {
    deleteOne(req?:Request, res?:Response): void;
}
