import { Router } from 'express';
import Pizza from '../models/Pizza';
import Plant from '../models/PLant';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const plant = await Plant.create(req.body);

      res.send(plant);
    } catch (err) {
      next(err);
    }
  })


  .get('/', async (req, res, next) => {
    try {
      const plants = await Plant.getAll();

      res.send(plants);
    } catch (err) {
      next(err);
    }
  })


  .get('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })


  .put('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })


  .delete('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })
;



