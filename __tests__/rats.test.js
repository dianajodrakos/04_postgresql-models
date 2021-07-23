import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Rat from '../lib/models/Rat.js';

describe('rats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new rat', async () => {
    const rat = { 
      name: 'Pizza Rat',
      size: 'hefty',
      location: 'NYC',
      likesPizza: true
    };

    const res = await request(app).post('/api/v1/rats').send(rat);

    expect(res.body).toEqual({
      id: '1',
      ...rat,
    });
  });


  it('GETS all rats', async () => {

  });


  it('GETS one rat by id', async () => {

  });


  it('PUTS a rat by id', async () => {

  });


  it('DELETES a rat by id', async () => {

  });

});
