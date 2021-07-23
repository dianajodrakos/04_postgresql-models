import pool from '..utils/pool';

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

    static async create() {

    }

    static async getAll() {

    }

    static async getById() {

    }

    static async updateById() {

    }

    static async deleteById() {

    }
    

}