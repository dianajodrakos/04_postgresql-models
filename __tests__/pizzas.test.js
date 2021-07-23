import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  // it('POSTS a new pizza', async () => {

  // });


  // it('GETS all pizzas', () => {

  // });


  // it('GETS one pizza by id', () => {

  // });


  // it('PUTS a pizza by id', () => {

  // });


  // it('DELETES a pizza by id', () => {

  // });
});
