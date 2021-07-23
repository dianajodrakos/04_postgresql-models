import { Router } from 'express';
import request from 'superagent';
import Pizza from '../models/Pizza';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pizza = await Pizza.create(req.body);

      res.send(pizza);
    } catch (err) {
      next(err);
    }
  })


  .get('/', async (req, res, next) => {
    try {
      const pizzas = await Pizza.getAll();

      res.send(pizzas);
    } catch (err) {
      next(err);
    }
  })


  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params.id;
      const pizza = await Pizza.getById(id);

      res.send(pizza);
    } catch (err) {
      next(err);
    }
  })


//   .put('/:id', async (req, res, next) => {

//   })


//   .delete('/:id', async (req, res, next) => {

//   })
;



