import { signUp } from "controllers/auth.controllers";
import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', signUp);

export { authRouter };