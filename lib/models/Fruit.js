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
      const { rows } = await pool.query('SELECT * FROM fruits WHERE id=$1', [id]);
      return new Fruit(rows[0]);
    }

    static async updateById(id, { name, type, month, goodOnPizza}) {
      const existingFruit = await Fruit.getById(id);
      const newName = name ?? existingFruit.name;
      const newType = type ?? existingFruit.type;
      const newMonth = month ?? existingFruit.month;
      const newGoodOnPizza = goodOnPizza ?? existingFruit.goodOnPizza;

      const { rows } = await pool.query(
          'UPDATE fruits SET name=$1, type=$2, month=$3, good_on_pizza=$4 WHERE id=$5 RETURNING *',
          [newName, newType, newMonth, newGoodOnPizza, id]
      );

      return new Fruit(rows[0]);
    }

    static async deleteById(id) {
      const { rows } = await pool.query(
        'DELETE FROM fruits WHERE id=$1 RETURNING *',
        [id]
    );

    return new Fruit(rows[0]);
    }

}