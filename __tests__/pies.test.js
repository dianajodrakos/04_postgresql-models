import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pie from '../lib/models/Pie.js';

describe('pie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new pie', async () => {
    const pie = { 
      name: 'apple pie',
      type: 'fruit',
      filling: 'apples',
      crust: 'flaky',
      servings: 8
    };

    const res = await request(app).post('/api/v1/pies').send(pie);

    expect(res.body).toEqual({
      id: '1',
      ...pie,
    });
  });


  it('GETS all pies', async () => {

  });


  it('GETS one pie by id', async () => {

  });


  it('PUTS a pie by id', async () => {

  });


  it('DELETES a pie by id', async () => {

  });
});
