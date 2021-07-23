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
    const plant = { 
      commonName: 'bird\'s nest fern',
      scientificName: 'Asplenium Nidus',
      light: 'partial to full shade',
      difficulty: 6
    };

    const res = await request(app).post('/api/v1/plants').send(plant);

    expect(res.body).toEqual({
      id: '1',
      ...plant,
    });
  });


  it('GETS all plants', async () => {
    const plant1 = await Plant.create({ 
      commonName: 'bird\'s nest fern',
      scientificName: 'Asplenium nidus',
      light: 'partial to full shade',
      difficulty: 6
    });

    const plant2 = await Plant.create({ 
      commonName: 'pothos',
      scientificName: 'Epipremnum aureum',
      light: 'bright indirect light',
      difficulty: 3
    });

    return request(app)
      .get('/api/v1/plants')
      .then((res) => {
        expect(res.body).toEqual([plant1, plant2]);
      });
  });


  it('GETS one plant by id', async () => {
    const plant = await Plant.create({ 
      commonName: 'elephant bush',
      scientificName: 'Portulacaria afra',
      light: 'full to partial sun',
      difficulty: 3
    });

    const res = await request(app).get(`/api/v1/plants/${plant.id}`);

    expect(res.body).toEqual(plant);
  });


  it('PUTS a plant by id', async () => {

  });


  it('DELETES a plant by id', async () => {

  });
});
