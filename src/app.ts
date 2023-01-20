import express, { Router } from 'express';

import personasRoutes from '~/routes/personas';

const app = express();
app.use(express.json())

const pongRoute = Router();

pongRoute.get("/ping", (_, response) => {
    response.json("pong")
});

app.use(pongRoute);

app.use('/api/personas', personasRoutes)

const PORT = 9000;
app.listen(PORT, () => {
    console.log('api running on port %s', PORT);
});