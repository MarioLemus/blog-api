import {
    ControllerCreateOne,
    ControllerDeleteOne,
    ControllerGetAll,
    ControllerGetOne,
    ControllerUpdateOne
} from '@interfaces/IControllers'
import {Request, Response} from 'express'
import {UserServices} from '@services/UserService'

export class UserController implements ControllerCreateOne, ControllerDeleteOne, ControllerGetAll, ControllerGetOne, ControllerUpdateOne {
    async createOne(req:Request, res:Response): Promise<void> {
        const {email, nickname, password} = req.body
        const user = new UserServices()
        
        await user.createOne({email, nickname, password})
        .then(data => { res.status(201).json(data) })
        .catch(err => { res.status(400).json({error: err}) })
        return 
    }

    getOne(): void {}

    async getAll(req:Request, res:Response): Promise<void> {
        const user = new UserServices()
        await user.findAll()
        .then(data => { res.status(200).json(data) })
        .catch(err => { res.status(500).json({error: err}) })
        return
    }
    
    deleteOne(): void {}
    updateOne(): void {}
}