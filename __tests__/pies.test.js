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
    const pies1 = await Pie.create({
      name: 'apple pie',
      type: 'fruit',
      filling: 'apples',
      crust: 'flaky',
      servings: 8
    });

    const pies2 = await Pie.create({
      name: 'pizza',
      type: 'savory',
      filling: 'tomato sauce, cheese, various  toppings',
      crust: 'thin crust',
      servings: 12
    });

    return request(app)
      .get('/api/v1/pies')
      .then((res) => {
        expect(res.body).toEqual([pies1, pies2]);
      });
  });


  it('GETS one pie by id', async () => {
    const pie = await Pie.create({
      name: 'pumpkin pie',
      type: 'custard',
      filling: 'pumpkin',
      crust: 'graham cracker',
      servings: 8
    });

    const res = await request(app).get(`/api/v1/pies/${pie.id}`);

    expect(res.body).toEqual(pie);
  });


  it('PUTS a pie by id', async () => {
    const pie = await Pie.create({
      name: 'galette',
      type: 'fruit',
      filling: 'various',
      crust: 'flaky crust',
      servings: 1
    });

    const res = await request(app)
      .put(`/api/v1/pies/${pie.id}`)
      .send({ filling: 'various fruits' });

    expect(res.body).toEqual({
      ...pie,
      filling: 'various fruits'
    });
  });


  it('DELETES a pie by id', async () => {
    const pie = await Pie.create({
      name: 'apple pie',
      type: 'fruit',
      filling: 'apples',
      crust: 'flaky',
      servings: 8
    });

    const res = await request(app).delete(`/api/v1/pies/${pie.id}`);

    expect(res.body).toEqual({
      message: `${pie.name} was deleted.`
    });
  });
});

