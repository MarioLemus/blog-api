import {Request, Response} from 'express'

export interface ControllerGetOne {
    getOne(req?:Request, res?:Response): void;
}
