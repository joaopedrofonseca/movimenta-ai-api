import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database.js';
var app = express();
var port = process.env.PORT || 4000;
app
    .use(cors())
    .use(express.json());
export function init() {
    connectDb();
    return Promise.resolve(app);
}
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port, "."));
});
