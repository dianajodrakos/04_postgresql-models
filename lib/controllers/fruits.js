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
    try {
      const fruits = await Fruit.getAll();

      res.send(fruits);
    } catch (err) {
      next(err);
    }
  })


  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const fruit = await Fruit.getById(id);

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  })


  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, type, month, goodOnPizza }  = req.body;

      const updatedFruit = await Fruit.updateById(id, { name, type, month, goodOnPizza});

      res.send(updatedFruit);
    } catch (err) {
      next(err);
    }
  })


  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const fruit = await Fruit.deleteById(id);

      res.send({
        message: `${fruit.name} was deleted.`
      });

    } catch (err) {
      next(err);
    }
  })
;



