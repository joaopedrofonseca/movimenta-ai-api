import { Request, Response } from 'express';
import authService from '../services/auth.services.js';

export async function signUp(req: Request, res: Response) {
    const { email, password, name } = req.body;

    try {
        await authService.signUp({ email, password, name });
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

   /* try {
        await authService.SignIn({ email, password });
        return res.send(token).status(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }*/
}