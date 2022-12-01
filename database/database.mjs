import * as dotenv from "dotenv";
dotenv.config();
const PG_PW = process.env.PG_PW;
import { users } from "../data/users.mjs";

import pg from "pg";

const client = new pg.Client({
    host: "localhost",
    user: "express_admin",
    port: 5432,
    password: `${PG_PW}`,
    database: "express"
});

const dbConnection = async () => {
    try {
        await client.connect();
        console.log(`Connected to ${client.database}`);
    } catch(err) {
        console.log(err.message);
    }    
};

const dbDisconnection = async () => {
    try {
        await client.end();
        console.log(`Disconnected from ${client.database}`);
    } catch(err) {
        console.log(err.message);
    }    
}

const createUsersTable = async () => {
    try {
        await client.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, firstname VARCHAR, lastname VARCHAR, email VARCHAR, ip varchar)");
        console.log("new table users created");
    } catch(err) {
        console.log(err.message);
    }
};

const populateUsersTable = async () => {
    for(const user of users) {
        const {firstName, lastName, email, ip} = user;
        try {
            await client.query("INSERT INTO users (firstname, lastname, email, ip) VALUES ($1, $2, $3, $4);", [firstName, lastName, email, ip]);
            console.log("user inserted into table users");
        } catch(err) {
            console.log(err.message);
        }
    }
};

const getUsers = async () => {
    try {
        const res = await client.query("SELECT * FROM users");
        console.log(res.rows);
    } catch(err) {
        console.log(err.message);
    }
}

export const getUser = async (id) => {
    await dbConnection();
    try {
        const res = await client.query(`SELECT * FROM users where id = ${id}`);
        return res.rows[0];
    } catch(err) {
        console.log(err.message);
    } finally {
        await dbDisconnection();
    }
}

// createUsersTable();
// populateUsersTable();
// getUsers();