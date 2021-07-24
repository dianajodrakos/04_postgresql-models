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