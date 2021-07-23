import pool from '../utils/pool.js';

export default class Pizza {
    id; 
    name; 
    toppings;
    rating;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.toppings = row.toppings;
        this.rating = row.rating;
    }

    static async create({ name, toppings, rating }) {
        const { rows } = await pool.query(
            'INSERT INTO pizzas (name, toppings, rating) VALUES ($1, $2, $3) RETURNING *',
            [name, toppings, rating]
        );

        return new Pizza(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM pizzas');
        return rows.map((row) => new Pizza(row));
    }

    // static async getById() {

    // }

    // static async updateById() {

    // }

    // static async deleteById() {

    // }

}