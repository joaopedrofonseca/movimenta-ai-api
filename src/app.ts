import express, { Express } from 'express';
import cors from 'cors';
import { connectDb } from './config/database.js';

const app = express();
const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});