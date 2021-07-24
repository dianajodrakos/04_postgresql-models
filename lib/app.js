import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import fruitsController from './controllers/fruits.js';
import piesController from './controllers/pies.js';
import pizzasController from './controllers/pizzas.js';
import plantsController from './controllers/plants.js';
import ratsController from './controllers/rats.js';

const app = express();

app.use(express.json());

app.use('/api/v1/fruits', fruitsController);
app.use('/api/v1/pies', piesController);
app.use('/api/v1/pizzas', pizzasController);
app.use('/api/v1/plants', plantsController);
app.use('/api/v1/rats', ratsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
