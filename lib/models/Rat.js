import pool from '../utils/pool.js';

export default class Rat {
    id; 
    name; 
    size;
    location;
    likesPizza;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.size = row.size;
        this.location = row.location;
        this.likesPizza = row.likes_pizza;
    }

    static async create({ name, size, location, likesPizza }) {
        const { rows } = await pool.query(
            'INSERT INTO rats (name, size, location, likes_pizza) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, size, location, likesPizza]
        );

        return new Rat(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM rats');
        return rows.map((row) => new Rat(row));
    }

    static async getById(id) {

    }

    static async updateById(id, {}) {

    }

    static async deleteById(id) {

    }

}