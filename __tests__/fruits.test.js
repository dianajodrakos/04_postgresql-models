import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Fruit from '../lib/models/Fruit.js';

describe('fruits routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new fruit', async () => {

  });


  it('GETS all fruits', async () => {

  });


  it('GETS one fruit by id', async () => {

  });


  it('PUTS a fruit by id', async () => {

  });


  it('DELETES a fruit by id', async () => {

});
