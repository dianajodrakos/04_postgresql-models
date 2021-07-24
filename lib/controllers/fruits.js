import { Router } from 'express';
import Fruit from '../models/Fruit';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const fruit = await Fruit.create(req.body);

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  })


  .get('/', async (req, res, next) => {

  })


  .get('/:id', async (req, res, next) => {

  })


  .put('/:id', async (req, res, next) => {

  })


  .delete('/:id', async (req, res, next) => {

  })
;



