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


//   .get('/', async (req, res, next) => {

//   })


//   .get('/:id', async (req, res, next) => {

//   })


//   .put('/:id', async (req, res, next) => {

//   })


//   .delete('/:id', async (req, res, next) => {

//   })
;



