import {
    ControllerCreateOne,
    ControllerDeleteOne,
    ControllerGetAll,
    ControllerGetOne,
    ControllerUpdateOne
} from '@interfaces/index'
import {Request, Response} from 'express'

export class UsersControllers implements ControllerCreateOne, ControllerDeleteOne, ControllerGetAll, ControllerGetOne, ControllerUpdateOne {
    createOne(): void {}
    getOne(): void {}
    getAll(req:Request, res:Response): void {
        res.send('Cuak working')
    }
    deleteOne(): void {}
    updateOne(): void {}
}