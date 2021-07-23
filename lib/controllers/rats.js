import { Router } from 'express';
import Rat from '../models/Rat';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const rat = await Rat.create(req.body);

      res.send(rat);
    } catch (err) {
      next(err);
    }
  })


  .get('/', async (req, res, next) => {
    try {
      const rats = await Rat.getAll();

      res.send(rats);
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



