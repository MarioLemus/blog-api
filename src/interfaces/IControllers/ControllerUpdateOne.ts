import {Request, Response} from 'express'

export interface ControllerUpdateOne {
    updateOne(req?:Request, res?:Response): void;
}
