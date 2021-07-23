import { Router } from 'express';
import Plant from '../models/Plant';

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
      const { id } = req.params;
      const plant = await Plant.getById(id);

      res.send(plant);
    } catch (err) {
      next(err);
    }
  })


  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { 
        commonName, 
        scientificName, 
        light, 
        difficulty 
      } = req.body;

      const updatedPlant = await Plant.updateById(
        id, 
        { 
          commonName, 
          scientificName, 
          light, 
          difficulty 
        });

      res.send(updatedPlant);
    } catch (err) {
      next(err);
    }
  })


  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const plant = await Plant.deleteById(id);

      res.send({
        message: `${plant.name} was deleted.`
      });
    } catch (err) {
      next(err);
    }
  })
;



