import {Request, Response} from 'express'

export interface ControllerGetAll {
    getAll(req?:Request, res?:Response): void;
}
