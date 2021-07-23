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

    static async create() {

    }

    static async getAll() {

    }

    static async getById(id) {

    }

    static async updateById(id, {}) {

    }

    static async deleteById(id) {

    }

}