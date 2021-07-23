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
    const rat1 = await Rat.create({ 
      name: 'Pizza Rat',
      size: 'hefty',
      location: 'NYC',
      likesPizza: true
    });

    const rat2 = await Rat.create({
      name: 'Splinter',
      size: '6\'2"',
      location: 'NYC sewers',
      likesPizza: true
    });

    return request(app)
      .get('/api/v1/rats')
      .then((res) => {
        expect(res.body).toEqual([rat1, rat2]);
      });

  });


  it('GETS one rat by id', async () => {
    const rat = await Rat.create({
      name: 'Pizza Rat',
      size: 'hefty',
      location: 'NYC',
      likesPizza: true
    });

    const res = await request(app).get(`/api/v1/rats/${rat.id}`);

    expect(res.body).toEqual(rat);
  });


  it('PUTS a rat by id', async () => {

  });


  it('DELETES a rat by id', async () => {

  });

});
