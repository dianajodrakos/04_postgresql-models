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

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM pizzas WHERE id=$1', [id]);
        return new Pizza(rows[0]);
    }

    static async updateById(id, { name, toppings, rating }) {
        const existingPizza = await Pizza.getById(id);
        const newName = name ?? existingPizza.name;
        const newToppings = toppings ?? existingPizza.toppings;
        const newRating = rating ?? existingPizza.rating;

        const { rows } = await pool.query(
            'UPDATE pizzas SET name=$1, toppings=$2, rating=$3 WHERE id=$4 RETURNING *',
            [newName, newToppings, newRating, id]
        );

        return new Pizza(rows[0]);
    }

    static async deleteById(id) {
        const { rows } = await pool.query(
            'DELETE FROM pizzas WHERE id=$1 RETURNING *',
            [id]
        );

        return new Pizza(rows[0]);
    }

}