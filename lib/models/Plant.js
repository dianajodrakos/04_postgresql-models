import pool from '../utils/pool.js';

export default class Plant {
    id; 
    common_name; 
    scientific_name;
    light;
    difficulty;

    constructor(row) {
        this.id = row.id;
        this.commonName = row.common_name; 
        this.scientificName = row.scientific_name;
        this.light = row.light;
        this.difficulty = row.difficulty;
    }

    static async create({ commonName, scientificName, light, difficulty }) {
      const { rows } = await pool.query(
        'INSERT INTO plants (common_name, scientific_name, light, difficulty) VALUES ($1, $2, $3, $4) RETURNING *', 
        [commonName, scientificName, light, difficulty]
        );

        return new Plant(rows[0]);
    }

    static async getAll() {
      const { rows } = await pool.query('SELECT * FROM plants');

      return rows.map((row) => new Plant(row));
    }

    static async getById(id) {
      const { rows } = await pool.query('SELECT * FROM plants WHERE id=$1', [id]);

      return new Plant(rows[0]);
    }

    static async updateById(id, { }) {

    }

    static async deleteById(id) {

    }

}