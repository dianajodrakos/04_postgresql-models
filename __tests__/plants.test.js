import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Plant from '../lib/models/Plant.js';

describe('plant routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new plant', async () => {

  });


  it('GETS all plants', async () => {
    
  });


  it('GETS one plant by id', async () => {

  });


  it('PUTS a plant by id', async () => {

  });


  it('DELETES a plant by id', async () => {

  });
});
