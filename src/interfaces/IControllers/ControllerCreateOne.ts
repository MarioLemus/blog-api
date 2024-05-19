import {Request, Response} from 'express'

export interface ControllerCreateOne {
    createOne(req?:Request, res?:Response): void;
}
