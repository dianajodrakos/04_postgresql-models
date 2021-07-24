import { Router } from 'express';
import Pie from '../models/Pie';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pie = await Pie.create(req.body);

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })


  .get('/', async (req, res, next) => {
    try {
      const pies = await Pie.getAll();

      res.send(pies);
    } catch (err) {
      next(err);
    }
  })


  .get('/:id', async (req, res, next) => {

  })


  .put('/:id', async (req, res, next) => {

  })


  .delete('/:id', async (req, res, next) => {

  })
;



