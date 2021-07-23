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

    static async updateById(id, { commonName, scientificName, light, difficulty }) {
      const existingPlant = await Plant.getById(id);
      const newCommonName = commonName ?? existingPlant.commonName;
      const newScientificName = scientificName ?? existingPlant.scientificName;
      const newLight = light ?? existingPlant.light;
      const newDifficulty = difficulty ?? existingPlant.difficulty;

      const { rows } = await pool.query(
        'UPDATE plants SET common_name=$1, scientific_name=$2, light=$3, difficulty=$4 WHERE id=$5 RETURNING *',
      [newCommonName, newScientificName, newLight, newDifficulty, id]);

      return new Plant(rows[0]);

    }

    static async deleteById(id) {

    }

}