import pool from '../utils/pool.js';

export default class Fruit {
    id; 
    name; 
    type;
    month;
    goodOnPizza;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.type = row.type;
        this.month = row.month;
        this.goodOnPizza = row.good_on_pizza;
    }

    static async create({ name, type, month, goodOnPizza}) {
      const { rows } = await pool.query(
        'INSERT INTO fruits (name, type, month, good_on_pizza) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, type, month, goodOnPizza]
    );

    return new Fruit(rows[0]);
    }

    static async getAll() {
      const { rows } = await pool.query('SELECT * FROM fruits');
      return rows.map((row) => new Fruit(row));
    }

    static async getById(id) {

    }

    static async updateById(id, { }) {

    }

    static async deleteById(id) {

    }

}