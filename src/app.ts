import express, { Express } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});