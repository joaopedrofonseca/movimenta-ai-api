import { Request, Response } from 'express';
import activitiesRepository from '../repository/activities.repository.js';

export async function getActivities(req: Request, res: Response) {
    try{
        const list = await activitiesRepository.getList();
        return res.send(list).status(200);
    } catch(error){
        return res.send(error.message).status(500);
    }
}