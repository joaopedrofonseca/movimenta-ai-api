import { Request, Response } from 'express';
import authService from 'services/auth.services';

export async function signUp(req: Request, res: Response) {
    const { email, password, name } = req.body;

    try {
        await authService.signUp({ email, password, name });
        return res.status(201);
    } catch (error) {
        return res.status(500);
    }
}