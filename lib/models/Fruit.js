import pool from '../utils/pool.js';

export default class Pizza {
    id; 
    name; 
    type;
    season;
    goodOnPizza;

    constructor(row) {
        this.id = row.id;
        this.name = row.name; 
        this.type = row.type;
        this.season = row.season;
        this.goodOnPizza = row.good_on_pizza;
    }

    static async create({ }) {

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