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
    const fruit = { 
      name: 'apple',
      type: 'pome',
      month: 'fall',
      goodOnPizza: true
    };

    const res = await request(app).post('/api/v1/fruits').send(fruit);

    expect(res.body).toEqual({
      id: '1',
      ...fruit,
    });
  });


  it('GETS all fruits', async () => {

  });


  it('GETS one fruit by id', async () => {

  });


  it('PUTS a fruit by id', async () => {

  });


  it('DELETES a fruit by id', async () => {

});
