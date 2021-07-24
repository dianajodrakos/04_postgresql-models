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
    try {
      const { id } = req.params;
      const pie = await Pie.getById(id);

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })


  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, type, filling, crust, servings } = req.body;

      const updatedPie = await Pie.updateById(id, { name, type, filling, crust, servings });

      res.send(updatedPie);
    } catch (err) {
      next(err);
    }
  })


  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const pie = await Pie.deleteById(id);

      res.send({
        message: `${pie.name} was deleted.`
      });

    } catch (err) {
      next(err);
    }
  })
;



