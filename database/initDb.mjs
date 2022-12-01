import { users } from "../data/users.mjs";
import client from "./clients.mjs";

const createUsersTable = async () => {
    try {
        await client.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, firstname VARCHAR, lastname VARCHAR, email VARCHAR, ip varchar)");
        console.log("new table users created");
    } catch(err) {
        console.log("Failed to create the table", err.stack);
    }
};

const populateUsersTable = async () => {
    for(const user of users) {
        const {firstName, lastName, email, ip} = user;
        try {
            await client.query("INSERT INTO users (firstname, lastname, email, ip) VALUES ($1, $2, $3, $4);", [firstName, lastName, email, ip]);
            console.log("user inserted into table users");
        } catch(err) {
            console.log("Failed to insert", err.stack);
        }
    }
};

// createUsersTable();
// populateUsersTable();
// getUsers();