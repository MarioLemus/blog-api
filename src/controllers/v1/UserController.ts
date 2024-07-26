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
        .catch(err => { res.status(400).json({error: err.message}) })
        return 
    }

    async getOne(req:Request, res:Response): Promise<void> {
        const {id} = req.params
        const user = new UserServices()
        await user.findOne({_id:id})
        .then(data => { res.status(200).json(data) })
        .catch(err => { res.status(404).json({error: err.message}) })
        return
    }
    
    async deleteOne(req:Request, res:Response): Promise<void> {
        const {id} = req.params
        const user = new UserServices()
        await user.deleteOne({_id:id})
        .then(() => { res.status(204).end() })
        .catch(err => { res.status(404).json({error: err.message}) })
        return
    }

    async updateOne(req:Request, res:Response): Promise<void> {
        const {id} = req.params
        console.log(id)
        const {email, password} = req.body
        const user = new UserServices()
        await user.updateOne({_id:id}, {email, password})
        .then(() => { res.status(204).end() })
        .catch(err => { res.status(404).json({error: err.message}) })
        return 
    }

    async getAll(req:Request, res:Response): Promise<void> {
        const user = new UserServices()
        await user.findAll()
        .then(data => { res.status(200).json(data) })
        .catch(err => { res.status(500).json({error: err.message}) })
        return
    }

}