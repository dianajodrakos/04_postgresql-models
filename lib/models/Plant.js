import pool from '../utils/pool.js';

export default class Plant {
    id; 
    common_name; 
    scientific_name;
    light;
    difficulty;

    constructor(row) {
        this.id = row.id;
        this.commonName = row.common_name; 
        this.scientificName = row.scientific_name;
        this.light = row.light;
        this.difficulty = row.difficulty;
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