import express from 'express';
import cors from 'cors';
import { authRouter } from 'router/auth-router';

const app = express();
const port = process.env.PORT || 5000;

app
    .use(cors())
    .use(express.json())
    .use(authRouter)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});