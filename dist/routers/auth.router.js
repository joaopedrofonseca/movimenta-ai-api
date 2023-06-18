import { signUp } from "controllers/auth.controllers";
import { Router } from "express";
var authRouter = Router();
authRouter.post('/sign-up', signUp);
export { authRouter };
