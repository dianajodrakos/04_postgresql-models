import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pizza from '../lib/models/Pizza.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new pizza', async () => {
    const pizza = { 
      name: 'hawaiian',
      toppings: 'cheese, pineapple, canadian bacon',
      rating: 8
    };

    const res = await request(app).post('/api/v1/pizzas').send(pizza);

    expect(res.body).toEqual({
      id: '1',
      ...pizza,
    });
  });


  it('GETS all pizzas', async () => {
    const pizza1 = await Pizza.create({
      name: 'hawaiian',
      toppings: 'cheese, pineapple, canadian bacon',
      rating: 8
    });

    const pizza2 = await Pizza.create({
      name: 'a better hawaiian',
      toppings: 'cheese, pineapple, proscuitto, basil, kalamata olives',
      rating: 11
    });

    return request(app)
      .get('/api/v1/pizzas')
      .then((res) => {
        expect(res.body).toEqual([pizza1, pizza2]);
      });
    
  });


  // it('GETS one pizza by id', () => {

  // });


  // it('PUTS a pizza by id', () => {

  // });


  // it('DELETES a pizza by id', () => {

  // });
});
