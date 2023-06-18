import express from 'express';
import cors from 'cors';
import { authRouter } from 'routers/auth.router';
var app = express();
var port = process.env.PORT || 5000;
app
    .use(cors())
    .use(express.json())
    .use([authRouter]);
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port, "."));
});
