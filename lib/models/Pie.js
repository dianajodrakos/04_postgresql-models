import pool from '../utils/pool.js';

export default class Pie {
    id; 
    name; 
    type;
    filling;
    crust;
    servings;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.type = row.type;
        this.filling = row.filling;
        this.crust = row.crust;
        this.servings = row.servings;
    }

    static async create({  name, type, filling, crust, servings }) {
      const { rows } = await pool.query(
        'INSERT INTO pies (name, type, filling, crust, servings) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, type, filling, crust, servings]
    );

    return new Pie(rows[0]);
    }

    static async getAll() {

    }

    static async getById(id) {

    }

    static async updateById(id, { }) {

    }

    static async deleteById(id) {

    }

}