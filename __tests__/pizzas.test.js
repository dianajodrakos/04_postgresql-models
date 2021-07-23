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


  it('GETS one pizza by id', async () => {
    const pizza = await Pizza.create({
      name: 'marinara',
      toppings: 'tomato sauce, mozzarella, basil',
      rating: 9
    });

    const res = await request(app).get(`/api/v1/pizzas/${pizza.id}`);

    expect(res.body).toEqual(pizza);
  });


  it('PUTS a pizza by id', async () => {
    const pizza = await Pizza.create({
      name: 'bbq chicken',
      toppings: 'cheese, barbecue sauce, chicken',
      rating: 4
    });

    const res = await request(app)
      .put(`/api/v1/pizzas/${pizza.id}`)
      .send({ toppings: 'cheese, barbecue sauce, red onions, cilantro, chicken', rating: 7 });

    expect(res.body).toEqual({
      ...pizza,
      toppings: 'cheese, barbecue sauce, red onions, cilantro, chicken',
      rating: 7
    });
  });


  it('DELETES a pizza by id', async () => {
    const pizza = await Pizza.create({
      name: 'hawaiian',
      toppings: 'cheese, pineapple, canadian bacon',
      rating: 8
    });

    const res = await request(app).delete(`/api/v1/pizzas/${pizza.id}`);

    expect(res.body).toEqual({
      message: `${pizza.name} was deleted.`
    });
  });
});
