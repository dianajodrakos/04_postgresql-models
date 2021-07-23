import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pizzasController from './controllers/pizzas.js';

const app = express();

app.use(express.json());

app.use('/api/v1/pizzas', pizzasController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
