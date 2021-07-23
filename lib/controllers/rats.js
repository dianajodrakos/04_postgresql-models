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
    try {
      const { id } = req.params;
      const rat = await Rat.getById(id);

      res.send(rat);
    } catch (err) {
      next(err);
    }
  })


  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, size, location, likesPizza } = req.body;

      const updatedRat = await Rat.updateById(id, { name, size, location, likesPizza });

      res.send(updatedRat);
    } catch (err) {
      next(err)
    }
  })


  .delete('/:id', async (req, res, next) => {

  })
;



